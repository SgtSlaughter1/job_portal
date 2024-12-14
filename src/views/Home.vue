<template>
    <section class="hero-section py-5 bg-primary text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <h1 class="display-4 fw-bold mb-4">Find Your Dream Job Today</h1>
                    <p class="lead mb-4">
                        Discover thousands of job opportunities from top companies worldwide.
                        Your next career move starts here.
                    </p>
                    <div class="search-box bg-white p-2 rounded-pill shadow-lg">
                        <div class="input-group">
                            <input type="text" class="form-control border-0" placeholder="Search jobs by title, company, or keywords...">
                            <BaseButton class="rounded-pill px-4">
                                Search Jobs
                            </BaseButton>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <img src="/images/job.png" alt="Job Search" class="img-fluid">
                </div>
            </div>
        </div>
    </section>


    <section class="job-listings my-5">
        <h2>Featured Job Openings</h2>
        <div class="row justify-content-center">
            <div class="col-md-4 col-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Software Engineer</h5>
                        <p class="card-text">Join our team to develop innovative software solutions.</p>
                        <BaseButton>Apply Now</BaseButton>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Product Manager</h5>
                        <p class="card-text">Lead product development and strategy for our new products.</p>
                        <BaseButton>Apply Now</BaseButton>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">UX Designer</h5>
                        <p class="card-text">Design user-friendly interfaces and enhance user experience.</p>
                        <BaseButton>Apply Now</BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <HowItWorks/>

    <TrustedCompanies/>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import HowItWorks from '@/components/HowItWorks.vue';
import TrustedCompanies from '@/components/TrustedCompanies.vue';

export default {
    components: {
        BaseButton,
        TrustedCompanies,
        HowItWorks,
    },
}
</script>

<style scoped>
.hero-section {
    overflow: hidden;
    background: linear-gradient(135deg, #4a90e2 0%, #2c3e50 100%);
    padding: 60px 0;
}

.container {
    margin: 60px 50px;
}

.search-box {
    max-width: 100%;
    margin: 20px auto;
}

.search-box .form-control:focus {
    box-shadow: none;
    border-color: #007bff;
}

.job-listings {
    margin: 40px 0;
    width: 90%;
    margin: 0 auto;
}

.job-listings h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #007bff;
}

.card {
    margin: 15px;
    border: none;
    border-radius: 12px;
    transition: transform 0.2s, box-shadow 0.2s;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
}

.card-text {
    color: #555;
    font-size: 0.9rem;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    padding: 10px 20px;
    border-radius: 25px;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
    transform: scale(1.05);
}
</style>