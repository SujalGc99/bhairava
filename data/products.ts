export interface Product {
    id: string;
    name: string;
    subtitle: string;
    price: string;
    description: string;
    imageSequencePath: string; // Path to folder containing frames
    frameCount: number;
    themeGradient: string;
    highlights: string[];
    culturalNote: string;
    sections: {
        title: string;
        subtitle: string;
    }[];
    buySection: {
        price: string;
        sizes: string[];
        fabric: string;
        fit: string;
        delivery: string;
        returnPolicy: string;
    };
}

export const bhairavaShirt: Product = {
    id: "bhairava-raglan-001",
    name: "BHAIRAVA RAGLAN",
    subtitle: "Awaken the Fierce Within",
    price: "NPR 4,500",
    description: "A tribute to the fierce manifestation of Shiva. This raglan tee combines ancient iconography with modern streetwear silhouettes. Crafted for those who walk with intensity.",
    imageSequencePath: "/frames",
    frameCount: 152,
    themeGradient: "linear-gradient(to bottom, #380404, #0A0A0A)",
    highlights: [
        "Premium Cotton Blend",
        "Puff Print Bhairava Motif",
        "Relaxed Street Fit",
        "Ethically Made in Nepal"
    ],
    culturalNote: "Bhairava represents the raw, unchecked power of nature and time. Wearing this symbol is an embrace of one's own inner fire and strength.",
    sections: [
        {
            title: "THE ORIGIN",
            subtitle: "Forged in the fires of tradition, designed for the streets of Kathmandu."
        },
        {
            title: "THE DETAILS",
            subtitle: "Intricate puff-print artwork inspired by the masks of Indrajatra."
        },
        {
            title: "THE FIT",
            subtitle: "Oversized, structured, and commanding. A silhouette that speaks before you do."
        }
    ],
    buySection: {
        price: "NPR 4,500",
        sizes: ["S", "M", "L", "XL", "XXL"],
        fabric: "280 GSM French Terry Cotton",
        fit: "Boxy / Oversized",
        delivery: "Free delivery within Kathmandu Valley",
        returnPolicy: "7-day easy exchange policy"
    }
};
