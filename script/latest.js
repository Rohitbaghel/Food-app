async function get_recipe(url){
    let res = await fetch(url)
    let data = await res.json()
    return data.meals
    }
    function append_recipe(data,container){
        data.forEach(({strMeal,strCategory,strArea,strInstructions,strMealThumb,strYoutube,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6})=>{
    let img = document.createElement('img')
    img.src = strMealThumb
    let name = document.createElement('h3')
    name.textContent = "Name: "+strMeal
    let category = document.createElement('h6')
    category.textContent = "Catergory: "+strCategory
    let area = document.createElement('p')
    area.textContent = "Style: "+strArea
    let description = document.createElement('p');
    description.textContent =strInstructions
    let h4 = document.createElement('h4')
    h4.innerText = "Ingredient"
    let i_1 = document.createElement('p')
    i_1.textContent="Ingredient1:"+strIngredient1
    let i_2 = document.createElement('p')
    i_2.textContent="Ingredient2:"+strIngredient2
    let i_3 = document.createElement('p')
    i_3.textContent="Ingredient3:"+strIngredient3
    let i_4 = document.createElement('p')
    i_4.textContent="Ingredient4:"+strIngredient4
    let i_5 = document.createElement('p')
    i_5.textContent="Ingredient5:"+strIngredient5
    let m_1 = document.createElement('p')
    m_1.textContent="measurement1: " +strMeasure1
    let m_2 = document.createElement('p')
    m_2.textContent="measurement2: " +strMeasure2
    let m_3 = document.createElement('p')
    m_3.textContent="measurement3: " +strMeasure3
    let m_4 = document.createElement('p')
    m_4.textContent="measurement4: " +strMeasure4
    let m_5 = document.createElement('p')
    m_5.textContent="measurement5: " +strMeasure5
    let m_6 = document.createElement('p')
    m_6.textContent="measurement6: " +strMeasure6
    
    container.append(img,name,category,area,strInstructions,h4,i_1,i_2,i_3,i_4,i_5,m_1,m_2,m_3,m_4,m_5,m_6)
    
        })
    }
    export {get_recipe,append_recipe}