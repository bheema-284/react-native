import { 
       ScrollView ,
       StyleSheet,
       Text,
       View,
       Image,
       Button,
       ActivityIndicator,
       FlatList} from "react-native";
import React, { useState,useEffect } from 'react';
const Home = ({navigation}) =>{
    const [Data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const getMovies = async () => {
        try {
         const response = await fetch('https://fakestoreapi.com/products');
         const res = await response.json();
         setData(res);
         console.log(res)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }     
     }
   
     useEffect(() => {
       getMovies();
       }, []);
       return(
       <>
       <ScrollView>
       <View style={styles.MainContainer}>
       {isLoading ? <ActivityIndicator/> : (
         <FlatList          
           data={Data}
           keyExtractor={({ id }, index) => id}
           renderItem={({ item }) => (
             <>
             <View style={styles.MainContainer}>
             <Text style={{ flex: 1, color:'white',backgroundColor:'green', textAlign:'center',justifyContent:'center',fontSize:20 ,}}>{item.title}</Text>
             <View style={{
        backgroundColor: '#00B8D4',
        width: '100%',
        height: 400,
        borderColor: '#FF3D00',
        borderWidth: 1,
        justifyContent: 'center'
      }}>
             <Image
           source={{
             uri: item.image,
           }}
           style={styles.item}
         />
             
             </View>
             <Text style={{ flex: 1, color:'white',backgroundColor:'blue', textAlign:'center' }}>{item.category}</Text>             
             <Text style={{ flex: 1, color:'white',backgroundColor:'yellow', textAlign:'center' }}>{item.price}</Text>
             <Text style={{ flex: 1, color:'white',backgroundColor:'gray', textAlign:'center' }}>{item.rating.rate}</Text>
             <Text style={{ flex: 1, color:'white',backgroundColor:'pink', textAlign:'center' }}>{item.description}</Text>
             </View>
             </>
           )}
         />
       )}
     </View>
     {/* <Button title='Go Back' onPress={()=> navigation.goBack()}/> */}
       </ScrollView>
       </>)
}


const styles = StyleSheet.create({
    MainContainer: {              
        width:'100%',        
      },
      item: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',        
        position: 'relative',
        
      },
    
    
  });
export default Home;
  