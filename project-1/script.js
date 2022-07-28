let data=[
    {
        name:'John',
        age:'18',

        domain:'Competitive programmer',
    },
    {
        name:'Jame',
        age:'20',

        domain:'Frontend developer',
    },
    {
        name:'Tim',
        age:'34',

        domain:'Software engineer',
    },
    {
        name:'Sam',
        age:'25',

        domain:'Backend developer',
    },
    {
        name:'Bob',
        age:'33',

        domain:'Full-stack developer',
    },
    {
        name:'Alex',
        age:'21',

        domain:'Android developer',
    }
];
const info=document.querySelector('#info');
let userDetails=data.map(function(item)
{
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + ' and ' + item.domain + '</div>';
});


info.innerHTML=userDetails.join('\n');