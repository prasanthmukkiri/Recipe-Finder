import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView , Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
   <View style={{
    backgroundColor:'#C0C0C0'
   }}>
      <ScrollView contentContainerStyle={styles.container}>
      
       
        
        <Text style={styles.title}>Welcome to Food Recipes</Text>
        <Text style={styles.subtitle}>Discover Delicious Recipes</Text>
        

         
       <Image
       style={styles.images}
        source={require('./Assets/download.png')}
       />
       

        

        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Food</Text>
          <Text style={styles.cardContent}>
            Food is any substance consumed to provide nutritional support for an organism. It is usually of plant or animal origin and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Recipes</Text>
          <Text style={styles.cardContent}>
            A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.
          </Text>
        </View>

        
      </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({

    images:{
        padding: 20,
    marginVertical: 10,
    width: '100%',
   
    },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  tinyLogo:{

  }
  
});

export default HomeScreen;
