export function size(str) {
    switch (str) {
        case 'size' === 'sm':
            return '1.1rem';
        case 'size' === 'sm':
            return '1.4rem';
        case 'size' === 'sm':
            return '1.6rem';
        default:
            return '1.1rem';
    }
}

//   padding: 0
//   ${(props) =>
//     props.size === "sm"
//       ? "1.1rem"
//       : props.size === "md"
//       ? "1.4rem"
//       : props.size === "lg"
//       ? "1.6rem"
//       : "1.1rem"};
// height: ${(props) => (props.size === "sm" ? "34px" : props.size === "lg" ? "40px" : "34px")};
