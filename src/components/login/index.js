import React from "react";
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import 'firebase/compat/auth';
import { signInWithPopup, getAdditionalUserInfo, FacebookAuthProvider } from "firebase/auth";
import { addDocument, generateKeywords } from '../../firebase/services';

var fbProvider = new firebase.auth.FacebookAuthProvider();
var gProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    const handleLogin = async (provider) => {
     
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const additionalUserInfo = getAdditionalUserInfo(result);
      if(provider === fbProvider){
        // This gives you a Facebook Access Token.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        user.photoURL = user.photoURL + "?height=500&access_token=" + token;
      }
    
      if (additionalUserInfo?.isNewUser) {
        addDocument('users', {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: additionalUserInfo.providerId,
          keywords: generateKeywords(user.displayName?.toLowerCase()),
        });
      }
    }   

  return (
      <div>
        <Row justify='center' style={{ height: 800 }}>
          <Col span={8}>
            <Typography.Title style={{ textAlign: 'center' }} level={3}>
              U Chat
            </Typography.Title>
            <Button
              style={{ width: '100%', marginBottom: 5 }}
              onClick={() => handleLogin(gProvider)}
            >
              Đăng nhập bằng Google
            </Button>
            <Button
              style={{ width: '100%' }}
              onClick={() => handleLogin(fbProvider)}
            >
              Đăng nhập bằng Facebook
            </Button>
          </Col>
        </Row>
      </div>
    );
}
