// Vehicle data organized by Category → Brand → Model → Years
export const vehicles = {
    "4x4": {
        "KIA": {
            "Sorento": [
                { year: 2018, image: "/cars/kia-sorento.png" },
            ],
        },
        "Changan": {
            "CS95": [
                { year: 2024, image: "/cars/changan-cs95.png" },
            ],
        },
        "Mitsubishi": {
            "Pajero": [
                { year: 2018, image: "/cars/mitsubishi-pajero.png" },
            ],
        },
        "Nissan": {
            "Xterra": [
                { year: 2022, image: "/cars/nissan-xterra.png" },
                { year: 2022, image: "/cars/nissan-xterra.png" },
            ],
            "Patrol": [
                { year: 2023, image: "/cars/nissan-patrol.png" },
                { year: 2023, image: "/cars/nissan-patrol.png" },
            ],
        },
    },
    "SUV": {
        "Changan": {
            "CS35 Plus": [
                { year: 2023, image: "/cars/changan-cs35.png" },
                { year: 2022, image: "/cars/changan-cs35.png" },
            ],
        },
        "Honda": {
            "CRV": [
                { year: 2016, image: "/cars/honda-crv.png" },
            ],
        },
        "Hyundai": {
            "Tucson": [
                { year: 2020, image: "/cars/hyundai-tucson.png" },
            ],
            "Creta": [
                { year: 2024, image: "/cars/hyundai-creta.png" },
            ],
        },
    },
    "Sedan": {
        "Changan": {
            "Eado Plus": [
                { year: 2023, image: "/cars/changan-eado-plus.png" },
            ],
            "Alsvin": [
                { year: 2023, image: "/cars/changan-alsvin.png" },
            ],
            "Eado": [
                { year: 2021, image: "/cars/changan-eado.png" },
            ],
        },
        "Honda": {
            "Accord": [
                { year: 2019, image: "/cars/honda-accord.png" },
                { year: 2017, image: "/cars/honda-accord.png" },
            ],
        },
        "Hyundai": {
            "Accent": [
                { year: 2024, image: "/cars/hyundai-accent.png" },
                { year: 2020, image: "/cars/hyundai-accent.png" },
            ],
            "Elantra": [
                { year: 2024, image: "/cars/hyundai-elantra.png" },
                { year: 2020, image: "/cars/hyundai-elantra.png" },
                { year: 2018, image: "/cars/hyundai-elantra.png" },
            ],
        },
        "Nissan": {
            "Altima": [
                { year: 2020, image: "/cars/nissan-altima.png" },
                { year: 2017, image: "/cars/nissan-altima.png" },
            ],
            "Sunny": [
                { year: 2021, image: "/cars/nissan-sunny.png" },
            ],
        },
        "Toyota": {
            "Camry": [
                { year: 2020, image: "/cars/toyota-camry.png" },
            ],
        },
    },
};

export const categoryImages = {
    "4x4": "/cars/nissan-xterra.png",
    "SUV": "/cars/changan-cs95.png",
    "Sedan": "/cars/toyota-camry.png",
};
