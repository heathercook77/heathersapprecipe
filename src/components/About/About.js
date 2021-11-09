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
          Simply Recipes is here to help you cook delicious meals with less
          stress and more joy. We offer recipes and cooking advice{" "}
          <em>for home cooks, by home cooks</em>. Helping create “kitchen wins”
          is what we’re all about.
        </p>
        <div
          id="mntl-sc-block_1-0-2"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-3"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          Simply Recipes was founded in 2003 by Elise Bauer as a home cooking
          blog to record her favorite family recipes. Today, Simply Recipes has
          grown into a trusted resource for home cooks with more than 3,000
          tested recipes, guides, and meal plans, drawing over 15 million
          readers each month from around the world. We’re supported by a diverse
          group of recipe developers, food writers, recipe and product testers,
          photographers, and other creative professionals.
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
          Elise Bauer was a busy Silicon Valley executive when she became sick
          with a flu that wouldn’t go away in 2001. In 2003, Elise moved home
          with her parents and lived with them for several years, recovering
          from chronic fatigue and documenting her parents’ cooking on Simply
          Recipes. (
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
            Recipe Development &amp; Testing{" "}
          </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-9"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          Our recipes primarily use fresh, unprocessed ingredients but we also
          believe there is a time and a place for canned, frozen, and other
          prepared ingredients. We believe in a diet that includes a wide
          variety of foods: real butter and cream, extra virgin olive oil, eggs,
          lots of fruits and vegetables, and protein from meat, fish, beans, and
          cheese. Plus cake for dessert.
        </p>
        <div
          id="mntl-sc-block_1-0-10"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-11"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          There are three things we think about when deciding if a recipe is
          good enough to go on Simply Recipes:
        </p>
        <div
          id="mntl-sc-block_1-0-12"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-13"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong>First, does it work?</strong> Recipes need to be easy to
          follow and provide reliable results, every time.
        </p>
        <div
          id="mntl-sc-block_1-0-14"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-15"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong>Second, is it delicious? </strong>Does the dish make us smile
          inside and out? Do we want to eat the whole batch by ourselves?&nbsp;
        </p>
        <div
          id="mntl-sc-block_1-0-16"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-17"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          <strong>Third, is it worth the effort?</strong> Do we want to make it
          again (and again and again)?
        </p>
        <div
          id="mntl-sc-block_1-0-18"
          className="comp mntl-sc-block mntl-sc-block-adslot mntl-block"
        ></div>
        <p
          id="mntl-sc-block_1-0-19"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          To make sure each of these standards is met, we start by working with
          expert recipe developers&nbsp; — people with the experience and
          knowledge to not only develop a good recipe in their own kitchens, but
          to make sure that recipe works in yours. Next, we thoroughly review
          and edit every recipe in-house line by line. Finally, each new recipe
          is run by our team of recipe testers working in home kitchens with the
          same pots, pans, and tools that you use in yours. Only after all this
          is the recipe shared on Simply Recipes.
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
            Diversity &amp; Inclusion{" "}
          </span>{" "}
        </h2>
        <p
          id="mntl-sc-block_1-0-24"
          className="comp mntl-sc-block mntl-sc-block-html"
        >
          Everyone is welcome at the Simply Recipes table: people of all races,
          religions, genders, sexual orientations, ages, backgrounds, and
          abilities. We strive to be a resource for every home cook, and we
          consciously work to make this inclusion felt in every part of the
          site, from the individuals we hire to the recipes we share.
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
            Below is a summary of our 2021 anti-racism commitments at Simply
            Recipes. Read the full text{" "}
            <a
              href="https://www.simplyrecipes.com/our-anti-racism-pledge-5186469"
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
            content covering diverse world cuisines.
          </li>
          <li>
            By the end of 2021, at least 30% of our new recipe videos will
            represent people of color.
          </li>
          <li>
            By the end of 2021, at least 25% of our monthly takeovers and
            cooking demos on Instagram will feature BIPOC.
          </li>
          <li>
            By the end of 2021, we commit to forming a partnership with a
            nonprofit organization that is aligned with our commitment to
            fighting bias in the food space.
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
              If you have come across a recipe or an article with concerns you
              feel need to be addressed, please reach out to us{" "}
              <a
                href="mailto:contact@simplyrecipes.com"
                data-component="link"
                data-source="inlineLink"
                data-type="internalLink"
                data-ordinal="1"
              >
                contact@simplyrecipes.com
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
