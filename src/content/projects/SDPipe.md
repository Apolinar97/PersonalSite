# Overview
An idea to build an end-to-end data engineering pipeline on AWS with the intention of furthering my knowledge and experience designing modern data systems.

While the original vision centered around AWS, the project is currently being built locally using PostgreSQL and MinIO (S3-compatible object storage) to establish strong architectural foundations before migrating to the cloud. This approach allows me to focus on core data engineering principles such as ingestion design, storage patterns, transformation logic, and dimensional modeling without relying immediately on managed services.

The pipeline ingests real public datasets from San Diego, including traffic collisions, police beat boundary data, and weather observations from the National Weather Service API. The architecture follows a layered design (raw to staging to curated) and is being built incrementally with cloud portability in mind.

The project is actively in development and continues to evolve as I refine both technical decisions and implementation patterns.

The idea is to explore the full lifecycle of a data pipeline from ingestion and transformation to storage and visualization using AWS services. The project is currently in the design and planning phase, with architecture, tooling, and data sources still being evaluated.
## Goal
Create a production-grade ELT pipeline that demonstrates core data engineering principles using infrastructure that can later transition to AWS.

The project aims to build practical experience with:
| Area | Description |
|------|-------------|
| Object Storage Design | Designing scalable folder and partitioning strategies that mirror production S3 patterns |
| Data Ingestion | Building structured, reproducible ingestion workflows for CSV and API-based datasets |
| Dimensional Modeling | Implementing fact, dimension, and bridge tables using star schema design |
| ELT Transformations | Writing SQL-based transformations inside PostgreSQL for performance and maintainability |
| Cloud-Ready Architecture | Designing the system locally with a clear migration path to AWS services |

The long-term goal is to culminate in a connected analytics dashboard while maintaining a clean, reproducible, and well-documented data platform.
## How I Built It
Project in active development. Current outcomes include:
1. Hands-on experience designing object storage structures  
2. Practical exposure to working with real public datasets  
3. Implementation of staging loaders using high-performance `COPY`  
4. Early dimensional modeling with fact and bridge patterns  
5. Clear architectural separation between raw, staging, and curated layers  
6. A defined migration path toward AWS-native services  

As development continues, the project is helping solidify my understanding of tradeoffs between local-first engineering and managed cloud services.

## Outcomes
**Project in planning  Expected outcomes to be:**
1. Hands on experience evaluating AWS data services and their appropriate use cases
2. A clearer understanding of how modern data pipelines are designed on AWS
3. A well documented project to demostrate my skills and understanding

## Roadmap
### Phase 1: Exploration and Discovery

The goal of this phase is to define the problem space and constraints before committing to specific tools or patterns.

**Completed and Ongoing Activities:**

1. Researching common AWS-based data pipeline architectures  
2. Evaluating public data sources and their structure  
3. Identifying requirements around scale, cost, and complexity  
4. Reviewing best practices for storage layout and access control

### Phase 2: Design and Prototyping

This phase focuses on validating architectural assumptions through small-scale implementations.

**Activities include:**

1. Prototyping ingestion workflows for CSV and API data  
2. Testing S3-style partitioning strategies in MinIO  
3. Building initial staging tables  
4. Designing and refining the dimensional schema  
5. Defining the initial architecture  

This phase is partially complete and continues to evolve as the model matures.

### Phase 3: Implementation and Iteration

After an initial design direction is selected, this phase shifts toward building and refining the pipeline.

**Planned activities include:**

1. Implementing the selected ingestion and transformation approach  
2. Loading curated data into the chosen database or warehouse 
3. Introducing scheduling and basic orchestration
4. Iterating on the design based on usability and performance

### Phase 4: Analytics and Reflection

The final phase focuses on enabling analytics and capturing lessons learned.

**Planned Activities include:**

1. Connecting a BI or visualization tool to the curated data  
2. Building exploratory dashboards for key metrics
3. Documenting architectural decisions and trade offs  
4. Writing a final project summary and retrospective


[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)](https://github.com/Apolinar97/SDPipe)