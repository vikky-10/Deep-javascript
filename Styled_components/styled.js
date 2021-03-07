console.log("this is styled-components 🚀");

// 🔴 styled-components utilises tagged template literals to style your components.

// It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

// 🏷️

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 2em;
//   background: #000;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!
// render(
//   <Wrapper>
//     <Title>
//       Hello World!
//     </Title>
//   </Wrapper>
// );
