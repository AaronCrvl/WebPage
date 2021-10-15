// _Variables
var txt1Open = false;
var txt2Open = false;
var txt3Open = false;
var validator = false;

// !_Alerts
alert("Hi! This a free WebPage template, feel free to use and modify it. Enjoy!");

// !_Functions
function AcessOnGit()
{    
    if ( validator == false )
    {
        document.querySelector("#TTLinks").innerHTML = "View on GitHub!";
        validator = true;
    }        
    else
    {
        document.querySelector("#TTLinks").innerHTML = "Some of my projects";  
        validator = false;              
    }        
}

function SystemDevelopmentMessage()
{        
    if(txt1Open == true)
    {
        document.querySelector("#GrupoTexto > p.UCBody_1").innerHTML = "";
        document.querySelector("#GrupoTexto > h1 > button").innerHTML = "Show Text";
        txt1Open = false;
    }
    else
    {
        var txt =     
        "The process of creating and maintaining information systems is "
        + "called systems development or systems analysis and design. This diagram shows "
        + "that it involves all five components of an information system. In addition to "
        + "technical knowledge, it requires business knowledge and management skill.";    

        document.querySelector("#GrupoTexto > p.UCBody_1").innerHTML = txt;        
        document.querySelector("#GrupoTexto > h1 > button").innerHTML = "Hide Text";
        txt1Open = true;
    }        
}
    
function ProgramingLanguagesMessage()
{    
    if(txt2Open == true)
    {
        document.querySelector("#GrupoTexto > p.UCBody_2").innerHTML = "";
        document.querySelector("#GrupoTexto > h2:nth-child(4) > button").innerHTML = "Show Text";        
        txt2Open = false;
    }
    else
    {
        var txt = 
        "Programming languages can be added to several different sections in your"
        + "resume, but the most popular one is your skills section. Here’s how to add"
        + " programming languages to the skills section of your resume: List the"
        + "programming languages you know, one line for one language, if you know just "
        + " a couple of languages.";

        document.querySelector("#GrupoTexto > p.UCBody_2").innerHTML = txt;
        document.querySelector("#GrupoTexto > h2:nth-child(4) > button").innerHTML = "Hide Text";
        txt2Open = true;        
    }    
}

function TechnologyImportanceMessage()
{    
    if(txt3Open == true)
    {
        document.querySelector("#GrupoTexto > h2:nth-child(6) > button").innerHTML = "Show Text";
        document.querySelector("#GrupoTexto > p.UCBody_3").innerHTML = "";
        txt3Open = false;
    }
    else
    {
        var txt = 
        "As developments over the past few years have shown, we are in a time of "
        + "unprecedented technological growth which shows no signs of slowing down. "
        + "This has caused upset and disruption on a huge scale as the impact of new, "
        + " cutting-edge technology is beginning to be seen now in every industry. As "
        + "with any technological revolution, in order to avoid being made obsolete, "
        + "existing companies will need to ensure they take advantage of these new "
        + " opportunities to improve their business, products and services. If they "
        + "don’t, newer and more consumer friendly options will be chosen by the customer."
        + "In this series of blogs, we will examine the impact that the introduction "
        + "of a new technology has and the changes that are occurring with the arrival "
        + "of blockchain and other disruptive technologies. As part of this investigation, "
        + "the importance and the benefits of implementing new technology solutions will be "
        + "discussed, along with the dangers of ignoring them. As well as this, the "
        + "articles will look at a previous example of a disruptive new technology "
        + "— the internet — and how it changed industries, along with the possible "
        + " lessons that can be learned and applied to this new technological revolution."
        + "Additionally, some of the new technologies, and how industries can best prepare "
        + "to adapt to their upcoming impact, will be discussed. Along the way, we’ll also "
        + "explain how Blockpass fits into all of this.Find the second part of the blog — The Importance "
        + "of Embracing New Technology. Part Two: The Benefits and Dangers of Innovation, here."
        + "What is technological transformation and why is it important? “It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is the most adaptable to change” — Charles Darwin (1809–1882)"
        + "Technological transformation, also referred to recently as digital transformation, has been a hot topic in recent years, with many businesses seeking to implement new technology to gain an edge on their competition. In essence, technological transformation is simply the process of developing a company through the application of a new technology in order to provide better products or services, or to achieve "
        + "savings through reducing costs, reducing time or otherwise making processes more efficient."
        + "By leveraging new technology, especially when coming to it ahead of the curve, there are two highly desirable ways in which a company may see beneficial results.";    

        document.querySelector("#GrupoTexto > p.UCBody_3").innerHTML = txt;        
        document.querySelector("#GrupoTexto > h2:nth-child(6) > button").innerHTML = "Hide Text";
        txt3Open = true;
    }    
}