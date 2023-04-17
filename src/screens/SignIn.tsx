import { Heading, Spacer, VStack, View } from 'native-base';
//import Logo from '../assets/GrouplogoCondo.svg';
import Logo from '../assets/4Easy.svg';
import { Button } from '../components/Button';
 
export function SignIn() {
    return (
        <VStack flex ={1} alignItems="center" bg="gray.200"  px={4} pt={24}>
            <Logo/>
            <Spacer  h={6} mb={2}  />
            <Button title="ACESSAR" bg= "blue.600" w= "full" mb={2}/>
            <Button title="ABRIR CONTA" bg="blue.400" w="full"mb={6}/>
        </VStack>
    )
}
    
    
    
    
    
    
    
    