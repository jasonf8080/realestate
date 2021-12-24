const featuredTowns = [
    {
        town: 'Ardsley',
        img: 'https://corcoran-com.euwest01.umbraco.io/media/3318/ardsley.jpg',
    },

    {
        town: 'Briarcliff Manor',
        img: 'https://static01.nyt.com/images/2015/06/14/realestate/20150614LIVING-slide-SL6P/20150614LIVING-slide-SL6P-superJumbo.jpg',
    },

    {
        town: 'Bronx',
        img: 'https://static01.nyt.com/images/2015/10/11/realestate/11LIVING-ARDSLEY-slide-GFVJ/11LIVING-ARDSLEY-slide-GFVJ-jumbo.jpg',
    },

    {
        town: 'Croton-on-Hudson',
        img: 'https://corcoran-com.euwest01.umbraco.io/media/2492/croton.jpg',
    },

    {
        town: 'Dobbs Ferry',
        img: 'https://static01.nyt.com/images/2021/10/27/realestate/27LIVING-DOBBSFERRY-slide-FL8Z/27LIVING-DOBBSFERRY-slide-FL8Z-mobileMasterAt3x.jpg',
    },

    {
        town: 'Elmsford',
        img: 'https://s.wsj.net/public/resources/images/NY-DK558_NYOPEN_M_20150123165952.jpg',
    },

    {
        town: 'Hawthorne',
        img: 'https://static01.nyt.com/images/2019/11/13/realestate/13LIVING-Hawthorne-slide-PIXU/13LIVING-Hawthorne-slide-PIXU-superJumbo.jpg',
    },

    {
        town: 'Mamaroneck',
        img: 'https://www.williampitt.com/wp-content/uploads/2016/03/Mamaroneck-Harbor-Pic-2.jpg',
    },

    {
        town: 'Mount Kisco',
        img: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_630,q_75,w_1400/v1/clients/westchesterny/VillageHall_MtKisco_a12e81f9-d741-4142-a08a-234244c0696c.jpg',
    },
    
    {
        town: 'Mount Vernon',
        img: 'https://images1.loopnet.com/i2/4kvOFyx-3WYWQAgo4yvNh4RNnC4I6YTTN-UHvn3IfDY/112/image.jpg',
    },

    {
        town: 'New Rochelle',
        img: 'https://www.ideallynewrochelle.com/wordpress/wp-content/uploads/2018/12/three-stories-you-should-know-from-main-street-new-rochelle-main.jpg',
    },

    {
        town: 'Ossining',
        img: 'https://corcoran-com.euwest01.umbraco.io/media/2495/ossining.jpg',
    },

    {
        town: 'Peekskill',
        img: 'https://i.pinimg.com/originals/09/e8/17/09e8174be341cd31d28c1350d4a0ab75.jpg',
    },

    {
        town: 'Pleasantville',
        img: 'https://neba.party/images/Westchester/Pleasantville.jpg',
    },

    {
        town: 'Port Chester',
        img: 'https://www.christiesrealestate.com/westchester/localimagereader.ashx?imageurl=siteresources%2Fsiteresources%2Fmy%20folder%2Fresponsive%2Fimages%2Farticles%2Fport%20chester%2Fwestchester%20port%20chester_crop.jpg&imagecache=true',
    },

    {
        town: 'Rye Brook',
        img: 'https://www.srresidencesrye.com/site/assets/files/1015/n9a6767.jpg',
    },

    {
        town: 'Tarrytown',
        img: 'https://visitsleepyhollow.com/wp-content/uploads/bb-plugin/cache/pierson-seating-1-scaled-landscape.jpg',
    },

    {
        town: 'Valhalla',
        img: 'https://images.squarespace-cdn.com/content/v1/54c02838e4b0e1edb0f1b98e/1472784542701-D9UK83Y3N4QYV4E6MWU2/LOU_9097.jpg',
    },

    {
        town: 'White Plains',
        img: 'https://www.travellens.co/content/images/2021/11/White-Plains.jpeg',
    },

    {
        town: 'Yorktown',
        img: 'https://www.governor.ny.gov/sites/governor.ny.gov/files/thumbnails/image/EntryPlazaFDR-Complete.jpg',
    },

    {
        town: 'Yonkers',
        img: 'https://static01.nyt.com/images/2017/07/23/realestate/23LIVING-slide-N8DB/23LIVING-slide-N8DB-videoSixteenByNineJumbo1600.jpg',
    }


];


window.addEventListener('load', function(){
    const location = document.querySelector('.location');
    const locationImg = document.querySelector('.about-header');

    const locationValue = localStorage.getItem('selectedTown');
   
    for(let i = 0; i < featuredTowns.length; i++){
        let correctTown = featuredTowns[i].town;
        let correctTownImg = featuredTowns[i].img;
        
        if(locationValue === correctTown){
            location.textContent = correctTown;
            locationImg.style.background =  `url(${correctTownImg}) no-repeat center/cover`;
        }
    }

    
})

