import React from "react";
import styled from 'styled-components'

//Button Compeont
const Button = styled.button`
    color: grey;
    border: 2px solid palevioletred;
`;

//button에 style에 추가된 RoundButton 컴포넌트
const RoundedButton = styled(Button) `
    border-radius: 16px;
`;

function Sample(props) {
    return (
        <div>
            <Button>Normal</Button>
            <RoundedButton>Rounded</RoundedButton>
        </div>
    )
}

export default Sample;