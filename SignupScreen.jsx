import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground , ScrollView} from 'react-native';

 
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SignupScreen = ({ navigation }) => {
  const [mobile,setMobile] =useState('')
  const [mobileVerify,setMobileVerify] =useState(false)
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(false);


  const handleemail= (emailVar) => {
   
      setEmail(emailVar);
      setEmailVerify(false)
      
      if ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(emailVar)){
        setEmail(emailVar);
        setEmailVerify(true);

      }
  };

  const handlemobile=(mobilevar)=>{
    setMobile(mobilevar)
    setMobileVerify(false)

    if(/^\d{10}$/.test(mobilevar)){
      setMobile(mobilevar)
      setMobileVerify(true)
    }
     

  }

  
  const passwordMinLength = 6;
  const handlePassword = (passwordVar) => {
    
    setPassword(passwordVar);
    setPasswordVerify(passwordVar.length >= passwordMinLength);
    setConfirmPasswordVerify(passwordVar === confirmPassword);
  };

  const handleConfirmPassword = (confirmPasswordVar) => {
    setConfirmPassword(confirmPasswordVar);
    setConfirmPasswordVerify(confirmPasswordVar === password);
  };

  const handleSignup = () => {
    if (emailVerify && passwordVerify && confirmPasswordVerify) {
      navigation.navigate('HomePage');
    } else {
      alert('Please ensure all fields are correctly filled out.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}
    showsVerticalScrollIndicator={false}
    >
    <ImageBackground
      source={{ uri: 'https://your-image-url.com/background.jpg' }}
      style={styles.background}
    >
      
      <View style={styles.overlay}>
        <Text style={styles.title}>Sign Up</Text>
        

        <TextInput
          style={styles.input}
          placeholder="Mobile"
          placeholderTextColor="#ccc"
          value={mobile}
          keyboardType='numeric'
          onChangeText={handlemobile}
        />
        {mobile.length<9?null:    mobileVerify?(
          <Feather name='check-circle' color='green' size={20} style={styles.icon}/>
        ):(
          <MaterialIcons name='error' color="red" size={20} style={styles.icon}/>
        )

      }
       
          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={handleemail}
        />
        
        {email.length<3?null:    emailVerify?(
          <Feather name='check-circle' color='green' size={20} style={styles.icon}/>
        ):(
          <MaterialIcons name='error' color="red" size={20} style={styles.icon}/>
        )

      }
      
   
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={e => handlePassword(e)}
        />
        {password.length > 0 && (
            passwordVerify ? (
              <Feather name='check-circle' color='green' size={20} style={styles.icon} />
            ) : (
              <MaterialIcons name='error' color="red" size={20} style={styles.icon} />
            )
          )}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmPassword}
          onChangeText={e => handleConfirmPassword(e)}
        />
         {confirmPassword.length > 0 && (
            confirmPasswordVerify ? (
              <Feather name='check-circle' color='green' size={20} style={styles.icon} />
            ) : (
              <MaterialIcons name='error' color="red" size={20} style={styles.icon} />
            )
          )}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  icon: {
    left:148,
    bottom:56,
    
    
    

    
    
  },
});

export default SignupScreen;
