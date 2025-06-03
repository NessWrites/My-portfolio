import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
           I am Ness (Nischhal Shrestha), a skilled professional with a strong background in artificial intelligence,
            machine learning, and full-stack development. During my hands-on experience at Blue Fox Pvt Ltd, 
            I developed chatbots using LangChain for client websites, showcasing my expertise in AI-driven 
            solutions. My academic projects include an innovative Image Captioning system using ResNet and 
            Transformer architectures, a House Price Prediction model leveraging ANN and Random Forest,
             and an Unhealthy Comment Classifier combining fine-tuned RoBERTa with custom-built ANN models 
             in PyTorch. My personal projects highlight my proficiency in building a Smart Banking System
              with AI, featuring a Django backend, SQLite database, and fraud detection using XGBoost, 
              Logistic Regression, and Random Forest. I also have experience in Twitter scraping with 
              Python and Twikit, as well as full-stack development with Java, JSP, and SQL for a 
              Twitter-Lite application. Certified in Supervised Machine Learning from Coursera,
               I combine my technical expertise with a passion for creating impactful, 
               AI-powered solutions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src= "https://github-readme-stats.vercel.app/api/top-langs/?username=NessWrites&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="NessWrites"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src= "https://github-readme-stats.vercel.app/api/?username=NessWrites&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="NessWrites"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="NessWrites"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Ness&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" 
            alt="NessWrites"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/NessWrites "
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=NessWrites&repo=Image_Search&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
              alt="NessWrites"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
