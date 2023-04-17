import {Center, Spinner} from 'native-base';

export function Loading(){
    return(
        <Center flex={1} bg="gray.300">
            <Spinner color="secondary.500" />
        </Center>
    );
}