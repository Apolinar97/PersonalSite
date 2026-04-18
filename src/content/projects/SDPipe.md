# Overview
An end-to-end data engineering pipeline built to grow practical experience designing modern data systems. The project ingests real public datasets from San Diego, including traffic collision reports and weather observations from the National Weather Service API, and transforms them into a dimensional model built for analytics.

The pipeline runs locally using PostgreSQL and MinIO (S3-compatible object storage), with the architecture designed for cloud portability from the start. The focus has been on getting a clean, layered data platform (raw, staging, curated) working end-to-end locally before migrating to AWS. That migration is intentionally on hold until the full pipeline is validated locally.

A Power BI dashboard is currently in development, connecting directly to the curated marts layer to explore collision patterns, weather correlations, and geographic trends across San Diego police beats. Further down the road, I am also exploring the idea of building an AI agent (the SDPipe Agent) that could analyze the warehouse data and surface insights conversationally. That will come after the dashboard work is in a solid place.

## Questions This Project Explores
Part of what makes this project interesting is the real-world questions the data can help answer.

When and where are collisions happening? Which neighborhoods and police beats see the highest collision volume, and are there specific times of day or days of the week that stand out as hot spots?

How are trends changing over time? Is the number of collisions in San Diego getting better, getting worse, or staying consistent year over year?

How does weather play a role? Do certain weather conditions correlate with higher collision rates or more severe outcomes?

How can this data inform better preparation? Are there patterns that could help city planners, traffic engineers, and first responders anticipate where and when resources are needed most?

These are the kinds of questions the Power BI dashboard is being built to explore, and they are also what makes the idea of an AI agent on top of this data an interesting next step.

## Goal
Build a production-grade ELT pipeline that demonstrates core data engineering principles using infrastructure that can later transition to AWS.

| Area | Description |
|------|-------------|
| Object Storage Design | Designing scalable folder and partitioning strategies that mirror production S3 patterns |
| Data Ingestion | Building structured, reproducible ingestion workflows for CSV and API-based datasets |
| Dimensional Modeling | Implementing fact, dimension, and bridge tables using a constellation schema |
| ELT Transformations | Writing SQL-based transformations in dbt for maintainability and testability |
| Cloud-Ready Architecture | Designing the system locally with a clear migration path to AWS services |
| Analytics | Connecting Power BI to the curated layer to surface meaningful insights |

## How I Built It

### Ingestion
Two ingestion paths feed the raw layer.

The first pulls from the City of San Diego's open data portal. A Python downloader fetches collision CSVs (basic reports and participant details) along with police beat reference data into MinIO object storage. It uses HTTP Last-Modified headers to skip files that have not changed since the last run.

The second path captures live weather data. A beat-to-station mapping file defines which NOAA weather stations best represent each San Diego police beat, based on proximity. An AWS Lambda function reads that mapping from S3 on each run, uses it to determine which stations to query, and then pulls hourly observations from the NWS API for those stations. The results are written as JSON batches to an S3 bucket, where they wait for the next stage of processing. A separate flattening script reads those JSON files, deduplicates the observations, drops anything that failed NWS quality checks, and writes clean CSVs back to S3 for the staging loader to pick up.

A staging loader then reads all CSVs from S3 and bulk-loads them into PostgreSQL using high-performance COPY commands. Collision tables are truncated before each load while weather observations append by snapshot date.

### Transformation (dbt)
All transformation logic lives in dbt, organized into three layers.

The staging layer is a set of views that clean and normalize raw data. This includes NULL handling, type casting, computed flags like is_fatal and is_hit_and_run, and converting weather observation timestamps from UTC to San Diego local time.

The intermediate layer uses incremental merge models to deduplicate records across loads. Collision detail rows get a stable surrogate key derived from report_id and source row number. Weather observations deduplicate by station and timestamp.

The marts layer is a constellation schema with three fact tables and five dimension tables. fct_collisions holds one row per collision joined to weather conditions at the beat, station, and hour grain. fct_collision_participants holds one row per person involved in a collision. fct_weather_observations holds one row per station reading. The schema also includes dim_date, dim_beat, dim_violation, dim_person, and dim_weather_station, along with a bridge table mapping police beats to their nearest weather station.

Surrogate keys are generated via MD5 hashing using dbt_utils, and all incremental models are designed to support idempotent re-loads.

### Infrastructure
Local development runs on Docker Compose with PostgreSQL 16 and MinIO. A Makefile provides a full pipeline runner as well as individual targets for each stage. Code quality is enforced with Ruff, SQLFluff, and pre-commit hooks. The NWS Lambda is deployed to AWS via SAM with GitHub Actions CI/CD using OIDC for authentication.

### Testing
Python unit tests cover the staging loader, NWS flattener, and Pydantic model validation. On the dbt side, generic tests check uniqueness, nullability, FK integrity, and accepted values. Singular tests validate row count preservation across layers and data freshness.

## Outcomes
Progress to date:

1. Fully functional raw ingestion for SD collision CSVs and NWS weather API data
2. Staging loader using PostgreSQL COPY with truncate and append strategies per dataset
3. Complete dbt transformation pipeline across staging, intermediate, and marts layers
4. Constellation schema with weather-collision joins at the beat, station, and hour grain
5. Deduplication logic for both collision records and weather observations across incremental loads
6. Stable surrogate keys that persist across re-loads
7. Comprehensive test coverage across Python unit tests and dbt generic and singular tests
8. AWS Lambda deployed for hourly NWS weather capture
9. Power BI dashboard in progress, connected to the local curated marts layer

## Roadmap

### Phase 1: Exploration and Discovery (Complete)
Defined the problem space, evaluated public data sources, and established architectural constraints around scale, cost, and complexity.

### Phase 2: Design and Prototyping (Complete)
Designed the layered storage architecture in MinIO and PostgreSQL, built and validated ingestion workflows for CSV and NWS API data, implemented the constellation schema with weather-collision join logic, and established the full dbt transformation pipeline with test coverage.

### Phase 3: Implementation and Iteration (In Progress)
Ingestion, staging, and transformation layers are fully implemented. The AWS Lambda for live NWS weather capture is deployed and running. Currently building out the Power BI dashboard connected to the marts layer, working toward a validated end-to-end local pipeline before moving to AWS.

### Phase 4: Analytics and AI Exploration (Planned)
Connect and finalize the Power BI dashboard with key collision and weather metrics. Explore building the SDPipe Agent, an AI-powered tool that can analyze the warehouse data and answer questions about San Diego collision and weather trends conversationally.

### Phase 5: Cloud Migration and Wrap-Up (Planned)
1. Migrate the local pipeline to AWS (S3, Redshift or RDS, Glue or Step Functions)
2. Replace Docker Compose services with managed AWS equivalents
3. Document architectural decisions and trade-offs
4. Write a final project summary and retrospective


[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)](https://github.com/Apolinar97/SDPipe)
