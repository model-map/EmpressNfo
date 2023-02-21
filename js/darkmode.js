const logo=document.getElementById('logo');
const links= document.querySelectorAll('a');
const body=document.querySelector('body');
const header=document.querySelector('header');
const footer=document.querySelector('footer');
const githubLink=document.getElementById('githubLink');
const githubLogo=document.getElementById('githubLogo');

let colormode='dark';

logo.addEventListener("click",()=>{
    if (colormode=='dark'){ // LIGHT MODE SETTINGS
        colormode='light';

        body.style['background-color']='#F1ECE4';
        body.style['color']='#000';

        header.style['background-color']='#dfd2c0';
        footer.style['background-color']='#dfd2c0';

        header.style['border']=`1px solid #00000050`;
        footer.style['border']=`1px solid #00000050`;
        container.style['border']=`1px solid #00000050`;
        bonus.style['border']=`1px solid #00000050`;

        footer.style['color']=`#000`;
        container.style['color']=`#000`;

        links.forEach((link)=>{
            link.style['color']=`#002cde`;
        })

        githubLink.style['color']=`#000`;
        githubLogo.style['filter']="invert(0)";
    }
    else{ // DARK MODE SETTINGS
        colormode='dark';

        body.style['background-color']='#141518';
        body.style['color']='#fff';

        header.style['background-color']='#333';
        footer.style['background-color']='#333';
        container.style['border']=`1px solid #ffffff50`;
        bonus.style['border']=`1px solid #ffffff50`;

        footer.style['color']=`#fff`;

        links.forEach((link)=>{
            link.style['color']=`deepskyblue`;
        })

        githubLink.style['color']=`#fff`;
        githubLogo.style['filter']="invert(1)";
    }

})