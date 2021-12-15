import React, { useRef } from "react";
import "./index.css";

export default function About() {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <div className="head-container">
        {" "}
        <h1>About</h1>
        <h3 className="contact-head" onClick={handleContactUsClick}>
          Contact Us
        </h3>
      </div>
      <div
        id="mntl-sc-page_1-0"
        className="comp text-passage structured-content mntl-sc-page mntl-block"
        data-sc-sticky-offset="60"
        data-sc-ad-label-height="24"
        data-sc-ad-track-spacing="100"
        data-sc-min-track-height="250"
        data-sc-max-track-height="600"
        data-sc-breakpoint="54em"
        data-sc-load-immediate="1"
        data-sc-content-positions="[300,600,900,1200,1500,1800,2100]"
        data-bind-scroll-on-start="true"
      >
        <span className="heading-toc" id="who-we-are"></span>{" "}
        <h2
          id="mntl-sc-block_1-0"
          className="comp mntl-sc-block lifestyle-sc-block-heading mntl-sc-block-heading"
        >
          {" "}
          <span className="mntl-sc-block-heading__text"> Who We Are </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-1"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          Visit this site to discuss the latest and greatest entertainment.
       {" "}
          <em>Meme Junkies.</em>. Entertainment blogging.
          
        </p>
        <div
          id="mntl-sc-block_1-0-2"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-3"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          In the early days of blogging, users would traditionally find blogs about pop culture and related subjects using blog search engines, including Technorati, Icerocket, Google Blog Search and others. Since the explosion of social media services such as Twitter, Facebook, Pinterest, Google+ and others, search has become less and less significant as a traffic draw. Now, getting a particular blog post or article to go "viral" on Facebook will have far greater significance than optimizing visibility in search engines.
          Add in the volume of links submitted to aggregation sites and services like Reddit and StumbleUpon and it's easier than ever to find blogs and blog posts on any imaginable topic, no matter how niche.
        </p>
        <div
          id="mntl-sc-block_1-0-4"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <span className="heading-toc" id="our-history"></span>{" "}
        <h2
          id="mntl-sc-block_1-0-5"
          className="comp mntl-sc-block lifestyle-sc-block-heading mntl-sc-block-heading"
        >
          {" "}
          <span className="mntl-sc-block-heading__text">
            {" "}
            Our History{" "}
          </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-6"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
        Made up and designed by Ms. Cook during a launchCode Project.
          
         
          
          <a
            href="https://www.simplyrecipes.com/behind-the-scenes-at-simply-recipes-5111324"
            data-component="link"
            data-source="inlineLink"
            data-type="internalLink"
            data-ordinal="1"
            rel="noopener noreferrer"
          >
            Here’s more of that story
          </a>
          .) Over the years, what started as a small blog grew to reach millions
          of readers every month! In 2020, Simply Recipes was acquired by
          Dotdash, a New York-based media company.
        </p>
        <div
          id="mntl-sc-block_1-0-7"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <span className="heading-toc" id="recipe-development--testing"></span>{" "}
        <h2
          id="mntl-sc-block_1-0-8"
          className="comp mntl-sc-block lifestyle-sc-block-heading mntl-sc-block-heading"
        >
          {" "}
          <span className="mntl-sc-block-heading__text">
            {" "}
            Entertainment & blogging &amp; Testing{" "}
          </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-9"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
           This app is a work in progress, getting better as time goes on.
          
          
          
          
          
        </p>
        <div
          id="mntl-sc-block_1-0-10"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-11"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          
          
        </p>
        <div
          id="mntl-sc-block_1-0-12"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-13"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong>Meme made simple</strong> Just have fun.
          
        </p>
        <div
          id="mntl-sc-block_1-0-14"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-15"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong> </strong>
          &nbsp;
        </p>
        <div
          id="mntl-sc-block_1-0-16"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-17"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong></strong> 
          
        </p>
        <div
          id="mntl-sc-block_1-0-18"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-19"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
         Blogging. Memes. Entertainment news. Maybe more.
        </p>
        <div
          id="mntl-sc-block_1-0-20"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-21"
          className="comp mntl-sc-block mntl-sc-block-html"
        ></p>
        <div
          id="mntl-sc-block_1-0-22"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <span className="heading-toc" id="diversity--inclusion"></span>{" "}
        <h2
          id="mntl-sc-block_1-0-23"
          className="comp mntl-sc-block lifestyle-sc-block-heading mntl-sc-block-heading"
        >
          {" "}
          <span className="mntl-sc-block-heading__text">
            {" "}
            {" "}
          </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-24"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          
        </p>
        <div
          id="mntl-sc-block_1-0-25"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-26"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          We’re not perfect, but we hope to get more right than we get wrong.{" "}
          <strong>
            {" "}
            <a
              href="#"
              data-component="link"
              data-source="inlineLink"
              data-type="internalLink"
              data-ordinal="1"
            >
              HERE
            </a>
          </strong>
          :
        </p>
        <div
          id="mntl-sc-block_1-0-27"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <ul
          id="mntl-sc-block_1-0-28"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <li>
            Conduct an anti-bias review of our entirely library with a team of
            independent reviewers by June 2021, and plan for the remediation of
            any articles identified during this review.
          </li>
          <li>
            Establish clear processes for identifying, reporting, and addressing
            bias and cultural appropriation in our content going forward.
          </li>
          <li>Increase the diversity of our full-time and part-time teams.</li>
          <li>
            Invest at least 30% of our editorial monthly budget toward creating
            content covering diverse content.
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
           
          </li>
        </ul>
        <div
          id="mntl-sc-block_1-0-29"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-30"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong ref={contactRef}>
            <em>
              If you have come across content or an article with concerns you
              feel need to be addressed, please reach out to us{" "}
              <a
                href="mailto:contact@entertainmentweekly.com"
                data-component="link"
                data-source="inlineLink"
                data-type="internalLink"
                data-ordinal="1"
              >
                contact@entertainmentweekly.com
              </a>
              .
            </em>
          </strong>
        </p>
        <div
          id="mntl-sc-block_1-0-31"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <span className="heading-toc" id="comments"></span>{" "}
      </div>
    </div>
  );
}
