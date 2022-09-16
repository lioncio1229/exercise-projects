import {useState} from 'react';
import Header from "./components/header";
import OperationList from './components/operation.list';
import BasicArithmetic from "./components/basicArithmetic";
import { Box, Grid, Container, SwipeableDrawer, IconButton, Divider, Stack } from "@mui/material";
import {Add, Remove, Close, Percent, Cancel} from "@mui/icons-material";

const Main = () => {

    const [index, setIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const basicArithmetic = (op1, op2) => {
        switch (index) {
            case 0: return Number(op1) + Number(op2);
            case 1: return Number(op1) - Number(op2);
            case 2: return Number(op1) * Number(op2);
            case 3: return Number(op1) / Number(op2);
        }
    }

    const basicArithmeticDetials = [
      {
        title: "Addition",
        buttonLabel: "Add",
        opIcon: <Add color="primary" fontSize="large" />,
        resultLabel: "Sum",
      },
      {
        title: "Subtraction",
        buttonLabel: "Subtract",
        opIcon: <Remove color="primary" fontSize="large" />,
        resultLabel: "Difference",
      },
      {
        title: "Multiplication",
        buttonLabel: "Multiply",
        opIcon: <Close color="primary" fontSize="large" />,
        resultLabel: "Product",
      },
      {
        title: "Division",
        buttonLabel: "Divide",
        opIcon: <Percent color="primary" fontSize="large" />,
        resultLabel: "Quotient",
      },
    ];

    const setIndexAndCloseDrawer = (index) => {
        setIndex(index);
        setIsDrawerOpen(false);
    }

    return (
      <>
        <Header onMenuClick={() => setIsDrawerOpen(true)} />

        <SwipeableDrawer
          open={isDrawerOpen}
          onOpen={() => setIsDrawerOpen(true)}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box width={300}>
            <Stack direction='row' justifyContent='flex-end'>
                <IconButton color='primary' onClick={() => setIsDrawerOpen(false)}>
                    <Cancel fontSize='large'/>
                </IconButton>
            </Stack>
            <Divider/>
            <OperationList index={index} setIndex={setIndexAndCloseDrawer} />
          </Box>
        </SwipeableDrawer>

        <Grid container>
          <Grid
            item
            xs={0}
            md={3}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <OperationList index={index} setIndex={setIndex} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Container
              sx={{ padding: { xs: "0 60px", sm: "0 10px", md: "0 20px" } }}
            >
              {basicArithmeticDetials.map(
                (item, i) =>
                  i == index && (
                    <BasicArithmetic
                      key={i}
                      title={item.title}
                      buttonLabel={item.buttonLabel}
                      opIcon={item.opIcon}
                      resultLabel={item.resultLabel}
                      onCalculate={basicArithmetic}
                    />
                  )
              )}
            </Container>
          </Grid>
        </Grid>
      </>
    );
}

export default Main;