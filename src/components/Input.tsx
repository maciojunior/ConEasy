import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
    width= '87%'
    h={14}
    mb={0.1}
    bg="gray.200"
    borderColor= 'gray.200'
    borderWidth= '2px'
    padding= '18px'
    margin= '20px'
    rounded="lg"
    fontSize="md"
    color="gray.500"
    placeholderTextColor="gray.400"
    _focus={{
      borderWidth: 1,
      borderColor: "blue.600",

    }}
    { ...rest }
    />    
  );
}