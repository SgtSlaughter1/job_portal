<template>
    <div class="job-listings container my-5">
        <h2 class="text-center mb-4">Available Job Opportunities</h2>

        <!-- Loading State -->
        <div v-if="jobStore.isLoading" class="text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="jobStore.hasError" class="alert alert-danger" role="alert">
            {{ jobStore.hasError }}
        </div>

        <!-- Job Cards -->
        <div v-else class="row g-4">
            <div v-for="job in jobStore.getJobs" :key="job.jobTitle" class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title text-primary">{{ job.jobTitle }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ job.company }}</h6>

                        <div class="mb-3">
                            <span class="badge bg-info me-2">
                                <i class="bi bi-geo-alt"></i> {{ job.location }}
                            </span>
                            <span class="badge bg-success">
                                <i class="bi bi-currency-dollar"></i> {{ job.pay }}
                            </span>
                        </div>

                        <p class="card-text">{{ job.description }}</p>

                        <BaseButton @click="applyForJob(job)" class="w-100">
                            Apply Now
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useJobStore } from '@/stores/jobs'
import BaseButton from '@/components/BaseButton.vue'

export default {
    name: 'JobListings',
    
    components: {
        BaseButton
    },

    data() {
        return {
            jobStore: useJobStore()
        }
    },

    created() {
        this.jobStore.fetchJobs()
    },

    methods: {
        applyForJob(job) {
            console.log('Applying for job:', job.jobTitle)
        }
    }
}
</script>

<style scoped>
.card {
    transition: transform 0.2s ease-in-out;
    border: none;
    border-radius: 10px;
}

.card:hover {
    transform: translateY(-5px);
}

.badge {
    font-size: 0.8rem;
    padding: 0.5em 0.8em;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
}

.card-subtitle {
    font-size: 1rem;
}
</style>
