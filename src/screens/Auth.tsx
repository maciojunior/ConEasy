import { Heading, Icon, Spacer, Text, VStack, useTheme} from 'native-base';
import Logo from '../assets/2Easy.svg';
import { Input } from "../components/Input";
import { Button } from '../components/Button';
import { Envelope, Key } from 'phosphor-react-native';

export function Auth(){

    const{colors} = useTheme();
return(
    <VStack flex={1} bg="gray.100" pt={24} px={4}>
        <Heading marginLeft={8} color="gray.500"mb ={1}>
            Bem-vindo!
        </Heading>
            <Text marginLeft={8} color="gray.500" fontSize="lg" pt={15}>Você tem tudo que precisa saber</Text>
            <Text marginLeft={8} color="gray.500"fontSize="lg"mb={20}>na palma da mão.</Text>   
    <Input placeholder="E-mail"
     InputLeftElement={<Icon as={<Envelope color={colors.gray[500]}/>}ml={4} />} 
    /> 
    <Input placeholder="Senha"mb={20}
    InputLeftElement={<Icon as={<Key color={colors.gray[500]}/>}ml={4} />}
    secureTextEntry
    />   

    <Button title="ACESSAR" bg= "blue.600" w= "full"mb={3}/>
    <Button title="CADASTRAR" bg="blue.400" w="full"mb={8}/>

    <Text color="gray.500" textAlign="center" fontSize="md"flex={1} >Esqueci minha senha</Text> 
    

    </VStack>
    );
}
    
    
    
    
    
    
    