const emailSend = () => {
    console.log('ただいま、メールを送信してます', user);

    fetch('https://73a6-240b-c010-4e3-64a3-b169-15c7-d6bc-38f7.ngrok-free.app/users', {
        method: 'GET',
        // HTTP リクエストのメソッド
        headers: {
            'Content-Type': 'application/json',
        },
        // サーバーへ送るファイルはJSONファイルであることを宣言
        body: JSON.stringify(user)
        // 送るデータをJSON形式に変換する
    })
    .then(response => response.json())
    .then(data => {
        // .thenは成功した時の処理を示す場合に使う。
        console.log('Success:', data);
    })
    .catch((error) => {
        // .catchは失敗の時の処理を示す場合に使う。
        console.error('Error:', error);
    });
}
