//this script will manage the button links
var feature = document.getElementById("feature-a");
var preview = document.getElementById("preview-a");
var pricing = document.getElementById("pricing-a");


if(window.innerWidth<=767)
{
    feature.href = "#form";
    preview.href = "#email";
    pricing.href   = "#video";
}
else if(window.innerWidth>=768 && window.innerWidth<=991)
{
    feature.href = "#form";
    preview.href = "#features";
    pricing.href   = "#video";
}
else if(window.innerWidth>=992 && window.innerWidth<=1199)
{
    feature.href = "#email";
    preview.href = "#feature-hr-link";
    pricing.href   = "#pricing";
}
else if(window.innerWidth>=1200)
{
    feature.href = "#email";
    preview.href = "#feature-hr-link";
    pricing.href   = "#pricing";
}
// alert(window.innerWidth);