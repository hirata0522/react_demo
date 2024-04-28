// import { useState } from "react"
// import Icon from "./Icon"
// import { Box, Button,Input} from "@mui/material";

// const Home = () => {
//     //位置判定用
//     const[admin,setadmin]=useState(false);
//     //ボタンで変更用
//     const[admin2,setadmin2]=useState(false);
//     const cahngecolor = (admin) =>{
        
//         if(admin){
//             setadmin2(false);
            
//         }else{
//             setadmin2(true);
//         }
//     }
//     //名前仮置き
//     var firstname=[ "Aさん", "Bさん" , "Cさん" , "Dさん"]
//     const R = Math.PI / 180;
    

//     const test = () => {
//         navigator.geolocation.getCurrentPosition(test2);
//     }
    
//     function test2(position) {
        

//         let latitude =  position.coords.latitude;
//         let longitude = position.coords.longitude;

//         let unilatitude =  34.8413424;
//         let unilongitude = 135.7050505;
//         //大学までの距離
//         latitude *= R;
//         longitude *= R;
//         unilatitude *= R;
//         unilongitude *= R;
//         //距離判定
//         let distance = 6371 * Math.acos(Math.cos(latitude) * Math.cos(unilatitude) * Math.cos(unilongitude - longitude) + Math.sin(latitude) * Math.sin(unilatitude));
       
//         //距離の判定
//         if (distance<0.1){
//             //学内
//             setadmin(true);
//         }else{
//             //学外
//             setadmin(false);
//         }
    
//     }
// return (
//     <>
//     ユーザー入力:<Input></Input><Button sx={{width: "150px"}} variant="contained" onClick={test}>更新ボタン</Button>
    
//     <Box
//         sx={{
//             position: 'fixed',
//             top: '50px',
//             left: '30px',
//             zIndex: 5,
//         }}
//     >
//     <Icon isAdmin={admin} name={firstname[0]}  /> 
//     </Box>
//     <Box style={{position: 'fixed',left: '72px', top:"60px", }}>4/27/15:56</Box>

//     <Box
//         sx={{
//             position: 'fixed',
//             top: '50px',
//             left: '180px',
//             zIndex: 5,
//         }}
//     >
//     <Icon isAdmin={admin2} name={firstname[1]} /> 
//     </Box>
//     <Box style={{position: 'fixed',left: '222px', top:"60px", }}>4/27/15:56</Box>

//     <Box
//         sx={{
//             position: 'fixed',
//             top: '50px',
//             left: '330px',
//             zIndex: 5,
//         }}
//     >
//     <Icon isAdmin={admin2} name={firstname[2]} /> 
//     </Box>
//     <Box style={{position: 'fixed',left: '372px', top:"60px", }}>4/27/15:56</Box>

//     <Box
//         sx={{
//             position: 'fixed',
//             top: '50px',
//             left: '480px',
//             zIndex: 5,
//         }}
//     >
//     <Icon isAdmin={admin2} name={firstname[3]} /> 
//     </Box>
//     <Box style={{position: 'fixed',left: '522px', top:"60px", }}>4/27/15:56</Box>


    
//     <Button style={{top: "700px"}} onClick={()=> cahngecolor(admin2)}>変更</Button>
    
//     </>

// )

// }

// export default Home

import { useState } from "react";
import Icon from "./Icon";
import { Box, Button, Input } from "@mui/material";

const Home = () => {
    const [admin, setAdmin] = useState(false);
    const [userName, setUserName] = useState(""); 
    const [comment, setComment] = useState(""); // コメントの状態追加

    const handleInputChange = (event, setter) => {
        setter(event.target.value); 
    };

    const handleClick = () => {
        test(); // 位置情報を更新
        generateJSON(); // JSONを生成
    };

    const test = () => {
        navigator.geolocation.getCurrentPosition(test2);
    };

    function test2(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let unilatitude = 34.8413424;
        let unilongitude = 135.7050505;
        latitude *= Math.PI / 180;
        longitude *= Math.PI / 180;
        unilatitude *= Math.PI / 180;
        unilongitude *= Math.PI / 180;

        let distance = 6371 * Math.acos(Math.cos(latitude) * Math.cos(unilatitude) * Math.cos(unilongitude - longitude) + Math.sin(latitude) * Math.sin(unilatitude));

        if (distance < 0.1) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }

    const generateJSON = () => {
        const status = admin ? "学内" : "学外"; 
        const userData = { user_name: userName, status: status, comment: comment }; // コメントを含むオブジェクトを作成
        const jsonData = JSON.stringify(userData); 
        console.log(jsonData); 
    };

    return (
        <>
            {/* ユーザー名とコメントの入力フィールド */}
            <Input value={userName} onChange={(e) => handleInputChange(e, setUserName)} placeholder="ユーザー名" />
            <Input value={comment} onChange={(e) => handleInputChange(e, setComment)} placeholder="コメント" />

            <Button sx={{ width: "150px" }} variant="contained" onClick={handleClick}>
                更新
            </Button>

            {["Aさん", "Bさん", "Cさん", "Dさん"].map((name, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "fixed",
                        top: "50px",
                        left: `${30 + 150 * index}px`,
                        zIndex: 5,
                    }}
                >
                    <Icon isAdmin={admin} name={name} />
                </Box>
            ))}
        </>
    );
};

export default Home;
