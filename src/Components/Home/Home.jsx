import React, {useState, useRef} from 'react'

//Components
import MenuSection from './MenuSection/MenuSection'
import ItemSelected from './ItemSelected/ItemSelected';

// Styled components
import styled from 'styled-components';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

// React-router
import { useNavigate } from 'react-router-dom';


export const Home = (props) => {

    const navigate = useNavigate();
    
    //States where recipes will be saved after being selected
    const [recipeOne, setRecipeOne] = useState([]);
    const [recipeTwo, setRecipeTwo] = useState([]);
    const [recipeThree, setRecipeThree] = useState([]);
    const [recipeFour, setRecipeFour] = useState([]);

    //States of the menu sections
    const [menuOne, setMenuOne] = useState(false);
    const [menuTwo, setMenuTwo] = useState(false);
    const [menuThree, setMenuThree] = useState(false);
    const [menuFour, setMenuFour] = useState(false);

    
    const [infoModal, setInfoModal] = useState(false); //info modal
    const [searchModal, setSearchModal] = useState(false); //search tip modal
    const [accountModal, setAccountModal] = useState(false); //account modal
    const [veganOk, setVeganOk] = useState(false); //Check if there is two vegan recipes
    const [serveModalDone, setServeModalDone] = useState(false); //serve modal
    const [serveModalAlert, setServeModalAlert] = useState(false); //serve modal

    const recipes = props.categories.searchResults[0].results; //recipes from the search
    const [id, setId] = useState(''); //id of the recipe selected
    const [itemSelected, setItemSelected] = useState(false); //item selected modal

    let veganCounter = 0; //counter for vegan recipes
    let totalPrice = 0; //total price of the menu
    
    // Function to handle the input of the search when you click Add to menu
    const inputElement = useRef();
    const handleInput = () => {
        inputElement.current.focus();
        setSearchModal(true);
    }

    const handleInfoModal = () => {
        setInfoModal(!infoModal);
    }

    // Function to get the information of the recipe selected
    const handleItemClick = (id) => {
        setId(id);
        setItemSelected(true);
    }
    
    // Function to count the vegan recipes
    const suitsforVegans = () => {
        if (recipeOne.vegan === true){
            veganCounter++;
            console.log(veganCounter);
        }
        if (recipeTwo.vegan === true){
            veganCounter++;
            console.log(veganCounter);
        }
        if (recipeThree.vegan === true){
            veganCounter++;
            console.log(veganCounter);
        }
        if (recipeFour.vegan === true){
            veganCounter++;
            console.log(veganCounter);
        }
    }
    
    // Function to check if there is two vegan recipes
    const handleVegan = () => {
        if (veganCounter === 2 ){
            setVeganOk(true);
            console.log(veganOk);
        } else if (veganCounter === 1 || veganCounter === 3 || veganCounter === 4){
            setVeganOk(false);
            console.log(veganOk);
        }
    }
    
    // Function to handle the total price of the menu
    const totalPriceSum = () => {
        if(menuOne) {
            totalPrice += recipeOne.pricePerServing;
        }
        if(menuTwo) {
            totalPrice += recipeTwo.pricePerServing;
        }
        if(menuThree) {
            totalPrice += recipeThree.pricePerServing;
        }
        if(menuFour) {
            totalPrice += recipeFour.pricePerServing;
        }
    }
    totalPriceSum();

    // This function activates when you click the serve menu button
    const handleServeModal = () => {
        suitsforVegans();
        handleVegan();
        if (menuOne && menuTwo && menuThree && menuFour && veganOk ){
            setServeModalDone(true);
            setRecipeOne([]);
            setRecipeTwo([]);
            setRecipeThree([]);
            setRecipeFour([]);
            setMenuOne(false);
            setMenuTwo(false);
            setMenuThree(false);
            setMenuFour(false);
            
        } else {
            setServeModalAlert(true);
        }
    }
    // Intervals for each modal
    if(searchModal){
        setInterval(() => {
            setSearchModal(false);
        }, 5000);
    }

    if(serveModalDone){
        setInterval(() => {
            setServeModalDone(false);
        }, 6000);
    }

    if(serveModalAlert){
        setInterval(() => {
            setServeModalAlert(false);
        }, 6000);
    }

    //Logout Function
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className='Home'>

            <HeaderStyle className='Header'>
                <TitleSection>
                    <Title>MENU OF THE DAY</Title>

                    <SocialDiv>
                        <Social>
                            <FontAwesomeIcon icon={faInfoCircle} 
                                onMouseEnter={() => handleInfoModal()} 
                                onMouseLeave={()=> handleInfoModal()}
                                onClick={() => handleInfoModal()}
                            />
                        </Social>
                        <Social><FontAwesomeIcon icon={faFacebook}/></Social>
                        <Social><FontAwesomeIcon icon={faInstagram}/></Social>
                        <Social><FontAwesomeIcon icon={faTelegram}/></Social>
                    </SocialDiv>

                    {infoModal ? 
                        <InfoModal>
                            <h3>Welcome to HotelFood!</h3>
                            Here you can find the best recipes for your menu.
                            Choose the recipes you want to add to your menu and click Add to menu.
                            Once you are done, click Serve menu.
                            You need to choose four menues, where two of them need to be vegan and the other two not.
                            If you are not sure about the recipes you want to add to your menu, click the recipe to watch the details.
                            If you are not satisfied with the menu, you can always change it.
                            <br/>
                            For troubleshooting, click the Telegram icon to get in touch with one of our support team.
                            <br/>
                            Don't forget to follow us on Facebook and Instagram!
                        </InfoModal>
                        : null}


                    <Stats>Price: $ {totalPrice} </Stats>
                    <UserLogo className='User-Logo'>
                    <FontAwesomeIcon  icon={faUser} onClick={() => accountModal ? setAccountModal(false) : setAccountModal(true)}/> 
                    </UserLogo>  
                    { accountModal ? 
                    <AccountModal> 
                        <AccountLinks onClick={() => navigate('/history')}>History</AccountLinks>
                        <AccountLinks onClick={() => handleLogout()}>Log Out</AccountLinks>    
                    </AccountModal> 
                    : null }  
                    
                </TitleSection>

                <BottomHeader>
                    <MenuSection
                        menuOne={menuOne}
                        menuTwo={menuTwo}
                        menuThree={menuThree}
                        menuFour={menuFour}
                        setMenuOne={setMenuOne}
                        setMenuTwo={setMenuTwo}
                        setMenuThree={setMenuThree}
                        setMenuFour={setMenuFour}
                        handleInput={handleInput}
                        recipeOne={recipeOne}
                        recipeTwo={recipeTwo}
                        recipeThree={recipeThree}   
                        recipeFour={recipeFour}
                    />
                    <ServeMenu onClick={() => handleServeModal()} >Serve Menu</ServeMenu>
                        
                    { serveModalDone ? 
                     <ServeModalDone>
                        <ServeModalText>Your menu has been sent to the kitchen!</ServeModalText>
                    </ServeModalDone>
                    : null }

                    { serveModalAlert ?
                    <ServeModalAlert>
                        <ServeModalText>You need to select four recipes and at least two of those recipes need to be vegan!</ServeModalText>
                    </ServeModalAlert>
                        : null}    

                </BottomHeader>
            </HeaderStyle>
            
            <FooterStyle className='Footer'>
                <GridSection className='GridSection'>
                    <SearchSection className='Search-section'>
                        <SearchTitle> SEARCH FOR RECIPES</SearchTitle>
                        <Search 
                            type="text" 
                            placeholder="Search for a recipe..." 
                            onChange={(e) => props.handleChange(e)}
                            ref={inputElement}
                        />

                        {searchModal ? 
                        <SearchModal>  Write the name of the recipe you want to search for. </SearchModal> 
                        : null}

                    </SearchSection>
                    
                    <Grid className='Grid'>
                        <Table>

                            <Thead>
                                <TrHead>
                                    <ThHead>Recipe name</ThHead>
                                    
                                </TrHead>
                            </Thead>

                            <Tbody>
                                { (recipes).map((d) =>
                                    <TrBody key={d.id}>
                                        <TdBody onClick={() => handleItemClick(d.id)}>{d.name}</TdBody> 
                                    </TrBody>
                                )}
                                <MoreRecipes onClick={() => props.handleShowMore()}>Get More Recipes</MoreRecipes> 
                            </Tbody>

                        </Table>

                    </Grid>
                </GridSection>

                <MenuDetails className='Menu-details'>
                    
                    {itemSelected ? 
                        <ItemSelected 
                            id={id}
                            menuOne={menuOne}
                            menuTwo={menuTwo}
                            menuThree={menuThree}
                            menuFour={menuFour}
                            setMenuOne={setMenuOne}
                            setMenuTwo={setMenuTwo}
                            setMenuThree={setMenuThree}
                            setMenuFour={setMenuFour}
                            recipeOne={recipeOne}
                            recipeTwo={recipeTwo}
                            recipeThree={recipeThree}
                            recipeFour={recipeFour}
                            setRecipeOne={setRecipeOne}
                            setRecipeTwo={setRecipeTwo}
                            setRecipeThree={setRecipeThree}
                            setRecipeFour={setRecipeFour}
                            
                        /> 
                        : <NoItem>There is no recipe selected yet.</NoItem> }                 
                </MenuDetails>
                        
            </FooterStyle>
                    
        </div>
    )
}

export default Home;

const HeaderStyle = styled.div`
    background-color: #f5f5f5;  
    width: 100vw;
    height: 30vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #b9b9b9;
    @media (max-width: 360px) {
        height: 100vh;
    }
`
const TitleSection = styled.div`
    display: flex;
    height: 50px;
    width: 100vw;
    justify-content: space-between;
    @media (max-width: 360px) {
        display: block;
        margin: 0px;
    }
`
const Title = styled.h1`
    width: 300px;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 30px;
    padding-right: 70px;
    background: #e63030;
    color: #fff;
    box-shadow: 5px 7px 10px #881c1c;

    @media (max-width: 360px) {
        width: 100vw;
        margin: 0px;
    }
` 

const SocialDiv = styled.div`
    display: flex;
    width: 400px;
    height: 50px;
    margin-top: 10px;

     @media (max-width: 360px) {
        width: 100vw;
        align-items: center;
        justify-content: center;
        margin-top: 0px;
    }
`

const Social = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
    transform: scale(2);
    color: #e95151;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #e63030;
        transform: scale(2.1);
    }

    @media (max-width: 360px) {
        width: 30px;
        margin-left: 5px;
        margin-right: 5px;
        transform: scale(1.5);
    }

`

const InfoModal = styled.div`
    flex-direction: column;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 220px;
    width: 300px;
    height: 400px;
    padding: 10px;
    padding-bottom: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 3px solid #353535;
    box-shadow: 5px 7px 10px #881c1c;
    z-index: 1;

    animation: fadein 1s;
    @keyframes fadein {
        from {top: -300px; opacity: 0;}
        to {top: 20px; opacity: 1;}
    }

    @media (max-width: 360px) {
        left: 15px;
        top: 100px;
    }


    @media (min-width: 1920px) {
        left: 300px;
    }
`
const Stats = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;    
    margin-top: 35px;
    padding-right: 70px;
    color: #000;
    box-shadow: 5px 7px 10px #881c1c;

    @media (max-width: 360px) {
        display: flex;
        padding-right: 0px;
        box-shadow: none;
        margin-top: 0px;
        margin-bottom: 0px;
    }
`
const UserLogo = styled.div`
    width: 20px;
    height: 20px;
    transform: scale(1.5);
    color: #e63030;
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    border: 1px solid #e63030;
    border-radius: 10%;
    box-shadow: 2px 3px 5px #b84444;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    
    &:hover{
        transform: scale(1.55);
    }

    @media (max-width: 360px) {
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        margin-top: 10px;
        color: #fff;
        border: 1px solid #fff;
        box-shadow: 2px 3px 5px #881c1c;
    }
`
const AccountModal = styled.div`
    width: 200px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 3px 5px 5px #9b3030;
    flex-direction: column;
    padding: 10px;
    margin-top: 60px;
    margin-right: 50px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: 0;
    animation: slidein 0.5s;
    
    @keyframes slidein {
        from {
            transform: translateY(-100px);
        }

        to {
            transform: translateY(0px);
        }
    }

    @media (max-width: 360px) {
        width: 100px;
        top: 0;
        margin-right: 0px;
    }
`
const AccountLinks = styled.p`
    font-size: 2rem;
    color: #000;
    line-height: 1;
    cursor: pointer;
    margin-top: 0;

    &:hover{
        color: #e63030;
    }
`
const BottomHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    
    @media (max-width: 360px) {
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        height: 90vh;
    }
`
const ServeMenu = styled.button`
    height: 60px;
    width: 60px;
    font-size: 1rem;
    margin-right: 80px;
    margin-left: -40px;
    color: #fff;
    border: 1px solid #fff;
    background: #e63030;
    border-radius: 10%;
    box-shadow: 3px 5px 7px #881c1c;
    line-height: 1;
    cursor: pointer;
    flex-wrap: wrap;
    
    @media (max-width: 360px) {
        margin-right: 0px;
        margin-left: 0px;
        display: block;
        width: 120px;
        height: 40px; 
    }
`
const ServeModalDone = styled.div`
    width: 200px;
    height: 60px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 3px 5px 5px #9b3030;
    flex-direction: column;
    padding: 10px;
    margin-top: 20px;
    margin-right: 50px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: 0;
    animation: slidein 0.5s;

    @keyframes slidein {
        from {
            transform: translateX(-100px);
        }
        to {
            transform: translateX(0px);
        }
    }

    @media (max-width: 360px) {
        margin-right: 0px;
        margin-top: 50px;
    }
`
const ServeModalAlert = styled.div`
    width: 200px;
    height: 100px;
    background-color: #dd2525;
    border: 3px solid #fff;
    color: #fff;
    border-radius: 10px;
    box-shadow: 3px 5px 5px #9b3030;
    flex-direction: column;
    padding: 10px;
    margin-right: 50px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    right: 0;
    animation: slidein 0.5s;

    @keyframes slidein {
        from {
            transform: translateX(100px);
        }

        to {
            transform: translateX(0px);
        }
    }

    @media (max-width: 360px) {
        margin-right: 0px;
        margin-top: 300px;
    }
`
const ServeModalText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0;
    margin-left: 10px;
    line-height: 1;
`
const FooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw; 
    border-bottom: 5px solid #b9b9b9;

    @media (max-width: 360px) {
        flex-direction: column;
    }
`
const GridSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    height: 520px;

    @media (max-width: 360px) {
        width: 100vw;
    }
    @media (min-width: 1920px) {
        height: 650px;
    }
`
const SearchSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70vw;
    height: 100px;
    background-color: #e63030;

    @media (max-width: 360px) {
        width: 100vw;
        flex-direction: column;
        height: 150px;
    }
`   
const SearchTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
    margin-right: 10px;
    background: #e63030;
    margin-left: 20px;

    @media (max-width: 360px) {
        font-size: 1.5rem;
    }
`
const Search = styled.input`
    width: 50vw;
    height: 30px;
    border: 2px solid #b9b9b9;
    border-radius: 10px;
    font-size: 1rem;
    padding-left: 10px;
    @media (max-width: 360px) {
        width: 70vw;
    }
`
const SearchModal = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #e0d18e;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    position: absolute;
    right: 35vw;

    @media (max-width: 360px) {
        right: 20px;
    }

`
const Grid = styled.div`
    overflow-y: scroll;
    display: block;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 70vw;
    height: 500px;
    background-color: #e4e4e4;
    font-size: 1.5rem;
    
    @media (max-width: 360px) {
        width: 100vw;
    }
    @media (min-width: 1920px) {
        height: 650px;
    }
`
const Table = styled.table`
    width: 100%;
    height: 100%;  
    border: 1px solid #b9b9b9;
    background-color: #e4e4e4;
    border-collapse: collapse;
    
`
const Thead = styled.thead`
    width: 100%;
    height: 7vh;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    background-color: #bebebe;
`
const TrHead = styled.tr`
    width: 100%;
    height: 100%;
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    border-collapse: collapse;
    background-color: #a3a3a3;
`
const ThHead = styled.th`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    border-collapse: collapse;
    background-color: #a09f9f;
`
const Tbody = styled.tbody`
    width: 100%;
    height: 100%;
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    border-collapse: collapse;
    background-color: #e4e4e4;
    
`
const TrBody = styled.tr`
    width: 100%;
    height: 30px;
    border-spacing: 0; 
    border: 1px solid #b9b9b9;
    border-collapse: collapse;
    background-color: #e4e4e4;
`
const TdBody = styled.td`
    width: 100%;
    height: 30px;
    border-spacing: 0;
    border: 1px solid #b9b9b9;
    background-color: #e4e4e4;
    border-collapse: collapse;
    cursor: pointer;
    padding-left: 20px;
`
 const MoreRecipes = styled.button`
    height: 40px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #e63030;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    @media (max-width: 360px) {
     height: 30px;   
    }
`
const MenuDetails = styled.div`
    flex-direction: column;
    width: 30vw;
    background-color: #ffffff;
    display: flex;
    margin: auto;

    @media (max-width: 360px) {
        width: 100vw;  
        height: 70vh;
    }
`
const NoItem = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    width: 27vw;
    height: 62vh;
    color: #000;
    background: #e0e0e0;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 2px dashed #b9b9b9;
    border-radius: 10px;
    display: flex;

    @media (max-width: 360px) {
        width: 90vw;
        height: 50vh;
    }   
`

    
