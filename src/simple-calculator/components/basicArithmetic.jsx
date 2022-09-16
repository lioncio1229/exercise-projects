import {useState} from 'react';
import { Box, Card, Stack, TextField, Typography, Divider, Button} from "@mui/material";

const Operand = ({children, value, onChange}) => {
    return (
        <Stack>
            <TextField size={{xs : 'small', sm : 'medium'}} variant='filled' type='number' value={value} onChange={onChange} />
            <Card>
                <Typography align='center' p={{xs : 0.88, sm : 2}} color='primary' fontFamily='Poppins'>
                    {children}
                </Typography>
            </Card>
        </Stack>
    )
}

const Result = ({children, result}) => {
    return (
        <Box minWidth={200}>
        <Card>
            <Typography sx={{fontSize : '1.2rem'}} align="center" p={2}  color="primary" fontFamily="Poppins">
            {result}
            </Typography>
            <Divider/>
            <Typography align="center" p={2} color="primary" fontFamily="Poppins">
            {children}
            </Typography>
        </Card>
        </Box>
    );
}

const BasicArithmetic = ({title, buttonLabel, opIcon, resultLabel, onCalculate}) => {
    const [op1, setOp1] = useState(0);
    const [op2, setOp2] = useState(0);
    const [result, setResult] = useState(0);

    const calculate = () => {
        setResult(onCalculate(op1, op2));
    }

    const clear = () => {
        setOp1(0);
        setOp2(0);
        setResult(0);
    }

    return ( 
        <Stack spacing={1}>
            <Box>
                <Typography variant="h4" fontFamily='Poppins' fontWeight='600' color='primary'>
                    {title}
                </Typography>
            </Box>

            <Box width={{md : '100%', lg : '80%'}}>

                <Stack direction={{sx : 'column', sm : 'row'}} spacing={1} justifyContent={{sm : 'center', md : 'start'}}>
                    <Operand value={op1} onChange={(e) => setOp1(e.target.value)}> Operand 1 </Operand>
                    <Box sx={{display : 'flex', alignItems : 'center'}} justifyContent='center'>
                        {opIcon}
                    </Box>
                    <Operand value={op2} onChange={(e) => setOp2(e.target.value)}> Operand 2 </Operand>
                    <Box sx={{display : 'flex', alignItems : 'center'}} justifyContent='center'>
                        <Typography fontSize={40} color='primary'>=</Typography>
                    </Box>
                    <Result result={result}> {resultLabel} </Result>
                </Stack>

                <Stack direction='row' spacing={1} justifyContent='center' pt={2}>
                    <Button variant="contained" color='primary' sx={{width : '120px'}} onClick={calculate}> {buttonLabel} </Button>
                    <Button variant="contained" color='primary' sx={{width : '120px'}} onClick={clear}> CLEAR </Button>
                </Stack>

            </Box>
        </Stack>
     );
}
 
export default BasicArithmetic;