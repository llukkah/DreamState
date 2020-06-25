import React from "react";
import"./About.css"
import Layout from "./Shared/Layout";

export default function About () {
    return (
        <Layout>
            <div>
               <p class="about-header">DREAMSTATE</p>
                <p class="about-start">DREAMSTATE was made to support the Black and African American communities around the world to give them an outlet to share their stories and experiences of their every day lives and struggles in safety and free of judgement. These stories of theirs are their personal experiences and realities and more likely than not to the outsider, seems like a dream.</p>
                <p>DREAMSTATE is a place where non-POC can educate themselves, start being active in their communities to become better allies, support eachother, attend gatherings, spread awareness, etc.</p>
                <p>DREAMSTATE serves as a stepping stone for anyone and everyone to get educated, aware, and active of the injustices committed on an everyday basis across all communities and countries.</p>
                <p>The only way for a better future is through compassion, unity, and support of eachother regardless of color, race, status, sexual orientation, disabilities and religious beliefs.</p>
                <p class="about-end">The more people see, hear and listen to eachother, this nightmare of a reality can end.</p>
            </div>
        </Layout>
    );
 }