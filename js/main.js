    const prevBtn = document.querySelector('.prev')

    const nextBtn = document.querySelector('.next')

    const slider = document.querySelector('.card-container')
    // const randomCharacs = document.querySelector('.random')
     
        prevBtn.style.display='none'
        nextBtn.style.display='none'
    

    document.querySelector('.choice').addEventListener('click', showCharacter)


    
    function showCharacter(){
        slider.textContent = ''

        prevBtn.style.display='block'

        nextBtn.style.display='block'

        // randomCharacs.classList.add('hidden')
        
        let input = document.querySelector('input').value
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api =`${proxy}https://rickandmortyapi.com/api/character/?name=${input}`;



        fetch(api) 
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let characters = data.results;
          

            characters.forEach((el,i) =>{
                
            let section = document.createElement('section')
            let subSection = document.createElement('section')
                let img  = document.createElement('img');
                let h2 =document.createElement('h2')
                let origin = document.createElement('h3')

                let species = document.createElement('h3')
                let location = document.createElement('h3')
            

                h2.innerText = el.name
                species.innerText = `Species: ${el.species}`
                origin.innerText = `Origin: ${el.origin.name}`
                location.innerText = `Location: ${el.location.name}`
                img.src = el.image


                slider.appendChild(section);
                section.appendChild(h2)
                section.appendChild(img)
                section.appendChild(subSection)
                subSection.appendChild(species)
                subSection.appendChild(origin)
                subSection.appendChild(location)
            
                subSection.className = 'subSection'
            })
            console.log(characters)



        })
        .catch(err => {
            console.log(`error ${err}`)
        });


        const section = document.getElementsByTagName('section')

    

        let counter = 0

       


        nextBtn.addEventListener('click', function(){

            counter = (counter < 19) ? counter + 1 : 19;
            
            slider.style.transform = 'translate(' + counter * -11.1  + '%)'
        })
        prevBtn.addEventListener('click', function(){

            counter = (counter > 0 ) ? counter -1 : 0;
            
            slider.style.transform = 'translate(' + counter * -11.1  + '%)'
        })

        
    
    }





    // document.querySelector('.randomCharacBtn').addEventListener('click', function(){

       
    //     // randomCharacs.classList.remove('hidden')
    //     slider.innerHTML = ''

    //     // document.querySelector('random').classList.remove('hidden')
       
    //     prevBtn.style.display='none'
    //     nextBtn.style.display='none'



    //     const random = Math.floor(Math.random() * (20 -1)+1)
    //     const proxy = 'https://cors-anywhere.herokuapp.com/';
    //     const api =`${proxy}https://rickandmortyapi.com/api/character/${random}`;



    //     fetch(api) 
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //         console.log(data)    
        
              
    //             let section = document.createElement('section')
    //             let subSection = document.createElement('section')
    //             let img  = document.createElement('img');
    //             let h2 =document.createElement('h2')
    //             let origin = document.createElement('h3')
    
    //             let species = document.createElement('h3')
    //             let location = document.createElement('h3')
                
    
    //                 h2.innerText = data.name
    //                 species.innerText = `Species: ${data.species}`
    //                 origin.innerText = `Origin: ${data.origin.name}`
    //                 location.innerText = `Location: ${data.location.name}`
    //                 img.src = data.image
    
    
    //                 slider.appendChild(section);
    //                 section.appendChild(h2)
    //                 section.appendChild(img)
    //                 section.appendChild(subSection)
    //                 subSection.appendChild(species)
    //                 subSection.appendChild(origin)
    //                 subSection.appendChild(location)

    //                 subSection.className = 'subSection'
            
            



    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });

        
    // })