import React, {useState, useEffect} from 'react';

//styled Components
import styled from 'styled-components';

//Axios
import axios from 'axios';

//Sweet Alert
import swal from 'sweetalert';

const ItemSelected = (props) => {

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6';
    const api = `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${apiKey}`

    const [recipeSelected, setRecipeSelected] = useState({}); //State that holds the recipe selected

    useEffect(() => {
        axios.get(api)
        .then(res => {
            setRecipeSelected(res.data) 
        })
        .catch(err => {
            console.log(err)
            swal('Error', 'Something went wrong', 'error')
        })
    }, [api])

    //Function to add the selected recipe to each menu
    const addMenu = () => {
        if(!props.menuOne){
            props.setMenuOne(true)
            props.setRecipeOne(recipeSelected);
        } else if(!props.menuTwo){
            props.setMenuTwo(true)
            props.setRecipeTwo(recipeSelected);
        } else if(!props.menuThree){
            props.setMenuThree(true)
            props.setRecipeThree(recipeSelected);
        } else if(!props.menuFour){
            props.setMenuFour(true)
            props.setRecipeFour(recipeSelected);
        } else{
            swal('You have reached the maximum number of recipes in your menu')
        }
    }


  return (

    <ItemSelectedStyle>
        <ItemImage src={recipeSelected.image} alt=""/>
        <ItemTitle>{recipeSelected.title}</ItemTitle>

        <ItemDescription>
            <ItemFirstSection>
                <ItemTimeCook>Time: {recipeSelected.readyInMinutes} min</ItemTimeCook>
                <ItemPrice>Price per serving: ${recipeSelected.pricePerServing}</ItemPrice>
            </ItemFirstSection>

            <ItemSecondSection>
                <ItemVegetarian>Vegetarian: {recipeSelected.vegetarian ? 'Yes' : 'No'}</ItemVegetarian> 
                <ItemVegan>Vegan: {recipeSelected.vegan ? 'Yes' : 'No'}</ItemVegan>
            </ItemSecondSection>
        </ItemDescription>

        <ItemButtons>
        <ItemLink href={recipeSelected.sourceUrl}>Get Full Recipe!</ItemLink>
        <AddItem onClick={() => addMenu()}>Add to menu</AddItem>
        </ItemButtons>

        


    </ItemSelectedStyle>

  );
};

export default ItemSelected;



const ItemSelectedStyle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    width: 27vw;
    height: 62vh;
    color: #000;
    background: #ecebeb;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px solid #000000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 360px) {
        width: 90vw;
        height: 50vh;
    }
`

const ItemImage = styled.img`
    width: 75%;
    height: 50%;
    border-radius: 10px;
    margin-top: 10px;
    
    @media (max-width: 360px) {
       width: 60%;
       height: 40%;    
    }
`

const ItemTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
`

const ItemDescription = styled.div`
    width: 80%;
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`

const ItemFirstSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    border-bottom: 1px solid #000;
`

const ItemSecondSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
`
const ItemTimeCook = styled.h3`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-top: 10px;
`
const ItemVegetarian = styled.h3`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-top: 10px;
`
const ItemVegan = styled.h3`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-top: 10px;
`
const ItemPrice = styled.h3`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-top: 10px;
`
const ItemButtons = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-bottom: 10px;
`
const ItemLink = styled.a`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        color: #e63030;
    }
`
const AddItem = styled.button`
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: 3px 5px 7px #881c1c;
    background: #e63030;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: 0.1s;

    &:hover{
        transform: scale(1.02);   
    }
`


