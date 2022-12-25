<template>
    <header class="text-white">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top" id="navbar">
            <div class="container">
                <router-link to="/" class="navbar-brand text-white">
                    <i class="bi bi-laptop"></i>
                    Hozumi's Portfolio
                </router-link>

                <!-- トグルボタン -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Top</router-link>
                        </li>
                        <li class="nav-item" v-for="value in links" :key="value">
                            <a class="nav-link active" :href="value.path">{{value.label}}</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/profile" class="nav-link active">Profile</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    label: "About",
                    path: "#about"
                },
                {
                    label: "Skill",
                    path: "#skill"
                },
                {
                    label: "Works",
                    path: "#works"
                },
            ]
        }
    }
}
</script>
