import { ref, computed } from 'vue'

export function useProjects() {
    //config
    const projects = ref([])
    const loading = ref(true)
    const error = ref(null)

    const projectDataUrl = import.meta.env.VITE_PROJECTS_DATA_URL
    const cacheKey = 'projectsDataCache'
    const cacheTimeToLive = 1000 * 60 * 60 * 1 // 1 hour

    const fetchJson = async (url) => {
        const response = await fetch(url, { cache: 'no-store' })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
    }
    const readCache = () => {
        try {
            const cachedData = localStorage.getItem(cacheKey)
            if (!cachedData)
                return null
            const { ts, data } = JSON.parse(cachedData)

            if (Date.now() - ts > cacheTimeToLive) {
                localStorage.removeItem(cacheKey)
                return null
            }
            return cachedData
        }
        catch (e) {
            console.warn('Failed to read cache:', e)
            return null
        }
    }
    const writeCache = (data) => {
        try {
            const ts = JSON.stringify({ ts: Date.now(), data })
            localStorage.setItem(cacheKey, ts)
        }
        catch (e) {
            console.warn('Failed to write cache:', e)
        }
    }
    const normalizeProjectData = (projectData) => {
        const projectName = String(projectData.project_name ?? 'Untitled Project').trim()
        const description = String(projectData.description ?? '').trim()
        const technologies = Array.isArray(projectData.technologies) ?
            projectData.technologies.map(tech => String(tech).trim()).filter(Boolean)
            : []
        const repositoryUrl = String(projectData.repository_url ?? '').trim()
        const projectPageSlug = String(projectData.slug ?? '').trim()
        return { projectName, description, technologies, repositoryUrl, projectPageSlug }
    }
    const normalizeProjectDataList = (projectDataList) => {
        const projectArr = Array.isArray(projectDataList) ? projectDataList : []
        return projectArr.map(normalizeProjectData)
    }
    const loadProjects = async (force = false) => {
        try {
            loading.value = true
            // Check cache and return if valid
            if (!force && !projects.value.length) {
                const cached = readCache()
                if (cached) {
                    projects.value = JSON.parse(cached).data
                    loading.value = false
                    return
                }
            }

            if (!projectDataUrl) {
                throw new Error('Project data URL is not defined')
            }

            const freshData = await fetchJson(projectDataUrl)
            console.log('Fetched project data:', freshData)
            const normalizedData = normalizeProjectDataList(freshData)
            projects.value = normalizedData
            writeCache(normalizedData)

        }
        catch (error) {
            console.error('Fetch failed for project data:', error)
        } finally {
            loading.value = false
        }

    }
    //TODO: filters

    //initial load
    loadProjects()


    return {
        projects, loading, error
    }


}