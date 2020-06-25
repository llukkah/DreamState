import React from "react";
import "./Interpret.css";
import "./Shared/Layout.css";
import { Link } from "react-router-dom";
import Layout from "./Shared/Layout";

export default function Interpret () {
    return (
        <Layout>
            <div class="interpret-body">
                <p class="interpret-title">Want to be an Ally but don't know where to start ?</p>
                <p class="interpret-title-2">A place for education.  A place for awareness.  A place for reflection.</p>
                <Link to="/Beauty" class="interpret-links">Beauty</Link>
                <Link to="/Books" class="interpret-links">Books</Link>
                <Link to="/Fashion" class="interpret-links">Fashion</Link>
                <Link to="/Food" class="interpret-links">Food</Link>
                <Link to="/Media" class="interpret-links">Media</Link>
                <Link to="/Podcast" class="interpret-links">Podcasts</Link>
                <Link to="/Tech" class="interpret-links">Tech</Link>
        
            <div class="interpret-div">
                <p class="interpret-text">It’s great that you want to speak up and fight for what’s right.  But also, it’s a time be quiet;  to truly hear and listen to the people around you; to stay quiet and amplify these voices that have been silenced for so long.  Developing the skill to determine what each moment calls for are necessary for true allyship.</p>
            </div>
        
            <p class="interpret-main-header">Discomfort is Good.</p>
                <div class="interpret-div">
                    <p class="interpret-text">While you educate yourself, you will feel uncomfortable.  Reflection on the privilege the mere color of your skin have a burden on you.  The Black community is in a constant state of discomfort.  In this time, task yourself with having uncomfortable conversations with friends, family, colleagues, etc on being not racist but anti-racist. Set those boundaries that have been normalized throughout society.  Take the role of the teacher to call out behaviors that oppress communities of color.  You may or may not lose friends and relationships over these conversations.</p>
                </div>

            <p class="interpret-main-header">Money is Power. Money is Political.</p>
                <div class="interpret-div">
                    <p class="interpret-text">Reflect on your lifestyle and where you spend your money.</p>
                    <p class="interpret-text">Do you buy from fast food chains / clothing stores where the CEO publicly states he/she/they donates to political parties whose past and present decisions have directly hindered your growth as a person and as a community?</p>
                    <p class="interpret-text">What festivals, concerts, movies or other forms of entertainment degrade the image of POC/marginalized communities?  Support of independent artists whose stories are real and authentic will become the norm if it is supported and demanded.</p>
                    <p class="interpret-text">It’s imperative to do research and be mindful of where our money goes.</p>
                    <p class="interpret-text">That’s the bottom dollar.</p>
                </div>
        
            <p class="interpret-main-header">Use Your Privilege.</p>
                <div class="interpret-div">
                    <p class="interpret-text">It is obvious that not everyone has the same amount of privilege.  Use whatever privilege life has granted you.</p>
                    <p class="interpret-text">Can you vote? Vote for progressive change.</p>
                    <p class="interpret-text">Own a car?  Offer rides to make sure people get to their destination safely, drop off resources and supplies to organizations / protests / gatherings.</p>
                    <p class="interpret-text">Access to a phone?  Call to senators to demand change, state attorneys to demand justice from criminal cops.</p>
                    <p class="interpret-text">Mobile in any shape or form?  Join a protest and show your solidarity and support against the killing of black people.</p>
                </div>
            </div>
        </Layout>
    );
}