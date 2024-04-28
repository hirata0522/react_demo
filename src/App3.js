import Icon from "./Icon";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Typography,
  Card,
  CardContent,
  Paper,
  Container,
  CircularProgress,
  Grid,
} from "@mui/material";

export function App3() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleClick = () => {
    test();
  };

  const test = () => {
    navigator.geolocation.getCurrentPosition(test2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://1653-240b-c020-430-1a7f-b55d-7641-8c7b-128c.ngrok-free.app/users", {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
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

    if (distance < 0.01) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    postData(); // 位置情報を更新した後、POSTを実行
  }

  const generateJSON = () => {
    const status = admin ? "学内" : "学外";
    const userData = { user_name: userName, status: status, comment: comment };
    const jsonData = JSON.stringify(userData);
    return jsonData;
  };

  const postData = async () => {
    const jsonData = generateJSON();
    try {
      const response = await fetch("https://1653-240b-c020-430-1a7f-b55d-7641-8c7b-128c.ngrok-free.app/users", {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // データを再読み込み
      fetchData();

      console.log("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  if (isLoading) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h5" color="error">
          Error: {error.message}
        </Typography>
      </Container>
    );
  }
  return (
    <Box sx={{ backgroundColor: "#c0c0c0", minHeight: "100vh" }}>
    <Container maxWidth="md" style={{ marginTop: "20px", backgroundColor: "#c0c0c0" }}>
      <Typography variant="h2" style={{ marginBottom: "12px", fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#333", textAlign: "left" }}>RUIN</Typography>
      <Typography variant="h5" style={{ marginBottom: "12px", color: "#333", textAlign: "left" }}>あなたの友人が大学にいるのか知ることができます</Typography>
  
      <Typography variant="body2" style={{ marginBottom: "8px" }}>
        <span style={{ color: "green", fontSize: "2.3em", marginRight: "0px" }}>●</span>
        <span style={{ color: "black", fontSize: "1.5em", marginRight: "5px" }}>：学内  </span>
        <span style={{ color: "red", fontSize: "2.3em", marginRight: "0px" }}>●</span>
        <span style={{ color: "black", fontSize: "1.5em", marginRight: "5px" }}>：学外 </span>
      </Typography>
  
      {data &&
        data.map((item, index) => (
          <Card key={index} sx={{ marginBottom: "10px" }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Icon isAdmin={item.status === "学内"} name={item.user_name} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#333" }}>
                    {item.user_name}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" style={{ fontSize: "20px", marginTop: "10px" }}> {item.comment}</Typography> {/* マージンを追加 */}
              <Typography variant="body2" style={{ fontSize: "13px" }}>最終更新時間: {item.updated_at}</Typography>
            </CardContent>
          </Card>
        ))}
      <Typography variant="h5" style={{ marginBottom: "12px", fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#333", textAlign: "left" }}>ステータスの変更はこちら</Typography>
  
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Input value={userName} onChange={(e) => handleInputChange(e, setUserName)} placeholder="ユーザー名" fullWidth style={{ marginBottom: "20px" , backgroundColor: "#ffffff" }}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Input value={comment} onChange={(e) => handleInputChange(e, setComment)} placeholder="コメント" fullWidth style={{ marginBottom: "20px" , backgroundColor: "#ffffff"}}/>
        </Grid>
      </Grid>
  
      <Button variant="contained" onClick={handleClick} style={{ marginBottom: "20px" }}>
        更新
      </Button>
    </Container>
    </Box>
  );
  

}

export default App3;
