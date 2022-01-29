import React from 'react';

//source

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

//styled components
import styled from 'styled-components';

const MenuSection = (props) => {

    const popRecipeOne = () => {
        props.setMenuOne(false)
        props.setRecipeOne([])
    }
    const popRecipeTwo = () => {
        props.setMenuTwo(false)
        props.setRecipeTwo([])
    }
    const popRecipeThree = () => {
        props.setMenuThree(false)
        props.setRecipeThree([])
    }
    const popRecipeFour = () => {
        props.setMenuFour(false)
        props.setRecipeFour([])
    }

    

  return (
  
    <MenuSectionStyle>
        { props.menuOne ? 
            <MenuDiv> 
                <RecipeImg src={props.recipeOne.image} alt={props.recipeOne.title}/>
                
                <StatsDiv>
                <PopRecipe  onClick={() => popRecipeOne()}>
                     <FontAwesomeIcon icon={faTimesCircle}/>
                    </PopRecipe>
                    <RecipeName>{props.recipeOne.title}</RecipeName>
                    <PriceAndTime>
                        <RecipePrice>${props.recipeOne.pricePerServing}</RecipePrice>
                        <RecipeTime>{props.recipeOne.readyInMinutes} min</RecipeTime>
                    </PriceAndTime>
                   
                </StatsDiv>

            </MenuDiv> 
            :
            <AddMenu>
                <Button onClick={props.handleInput}> <FontAwesomeIcon icon={faPlus} transform='shrink-7'/> </Button>
                Add to menu
            </AddMenu>
        }
        { props.menuTwo ? 
            <MenuDiv> 
            <RecipeImg src={props.recipeTwo.image} alt={props.recipeTwo.title}/>
            
            <StatsDiv>
            <PopRecipe  onClick={() => popRecipeTwo()}>
                 <FontAwesomeIcon icon={faTimesCircle}/>
                </PopRecipe>
                <RecipeName>{props.recipeTwo.title}</RecipeName>
                <PriceAndTime>
                    <RecipePrice>${props.recipeTwo.pricePerServing}</RecipePrice>
                    <RecipeTime>{props.recipeTwo.readyInMinutes} min</RecipeTime>
                </PriceAndTime>
               
            </StatsDiv>

        </MenuDiv> 
            :
            <AddMenu>
                <Button onClick={props.handleInput}> <FontAwesomeIcon icon={faPlus} transform='shrink-7'/> </Button>
                Add to menu
            </AddMenu>
        }
        { props.menuThree ? 
            <MenuDiv> 
            <RecipeImg src={props.recipeThree.image} alt={props.recipeThree.title}/>
            
            <StatsDiv>
            <PopRecipe  onClick={() => popRecipeThree()}>
                 <FontAwesomeIcon icon={faTimesCircle}/>
                </PopRecipe>
                <RecipeName>{props.recipeThree.title}</RecipeName>
                <PriceAndTime>
                    <RecipePrice>${props.recipeThree.pricePerServing}</RecipePrice>
                    <RecipeTime>{props.recipeThree.readyInMinutes} min</RecipeTime>
                </PriceAndTime>
               
            </StatsDiv>

        </MenuDiv> 
            :
            <AddMenu>
                <Button onClick={props.handleInput}> <FontAwesomeIcon icon={faPlus} transform='shrink-7'/> </Button>
                Add to menu
            </AddMenu>
        }
        { props.menuFour ? 
            <MenuDiv> 
            <RecipeImg src={props.recipeFour.image} alt={props.recipeFour.title}/>
            
            <StatsDiv>
            <PopRecipe  onClick={() => popRecipeFour()}>
                 <FontAwesomeIcon icon={faTimesCircle}/>
                </PopRecipe>
                <RecipeName>{props.recipeFour.title}</RecipeName>
                <PriceAndTime>
                    <RecipePrice>${props.recipeFour.pricePerServing}</RecipePrice>
                    <RecipeTime>{props.recipeFour.readyInMinutes} min</RecipeTime>
                </PriceAndTime>
               
            </StatsDiv>

        </MenuDiv> 
            :
            <AddMenu>
                <Button onClick={props.handleInput}> <FontAwesomeIcon icon={faPlus} transform='shrink-7'/> </Button>
                Add to menu
            </AddMenu>
        }
    </MenuSectionStyle>


  )
};

export default MenuSection;

const MenuSectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    height: 180px;
    margin: 0 auto;
    

    @media (max-width: 360px) {
        width: 70vw;
        flex-direction: column;
        columns: 2;
        height: auto;
        margin-top: 0;
    }
`

const MenuDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 110px;
    background-color: #ffffff;
    border: 2px solid #000000;
    border-radius: 10px;
    font-size: 1.5rem;

    @media (max-width: 360px) {
        height: 100px;
        margin-bottom: 20px;
   }
`
const RecipeImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-left: 20px;
`
const StatsDiv = styled.div`
    
    flex-direction: column;
    margin-left: 20px;
    
    width: 100%;
    height: 100%;
  
`
const RecipeName = styled.p`
    margin:0;
    font-size: 1.3rem;
    line-height: 1;
    margin-top: -20px;
`
const PriceAndTime = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    margin-top: -10px;
`
const RecipePrice = styled.p`
    font-size: 1.5rem;
`
const RecipeTime = styled.p`
    margin-left: 30px;
    font-size: 1.5rem;
`
const PopRecipe = styled.button`

    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    margin-left: 115px;
    margin-top: 7px;
    color:#e63030 ;
    z-index: 1;
`
const AddMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 110px;
    background-color: #e4e4e4;
    border: 2px dashed #b9b9b9;
    border-radius: 10px;
    font-size: 1.5rem;
    @media (max-width: 360px) {
        height: 100px;
        margin-bottom: 20px;
   }
`

const Button = styled.button`
    background-color: #ff5100;
    border: 2px solid #d14200;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    color: #ffffff;  
    padding-top: 5px;  
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    
    &:hover{
        transform: scale(1.05);
    }
`