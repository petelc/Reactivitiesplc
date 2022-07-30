// import React from 'react';
// import { FieldRenderProps } from 'react-final-form';
// import { Form, FormFieldProps } from 'semantic-ui-react';
// import { DateTimePicker } from 'react-widgets';

// interface IProps extends FieldRenderProps<Date, HTMLElement>, FormFieldProps {}

// const DateInput: React.FC<IProps> = ({
//   input,
//   width,
//   id = null,
//   placeholder,
//   date = false,
//   time = false,
//   meta: { touched, error },
//   ...rest
// }) => {
//   return (
//     <Form.Field error={touched && !error} width={width}>
//       <DateTimePicker
//         placeholder={placeholder}
//         value={input.value || null}
//         onChange={input.onChange}
//         date={date}
//         time={time}
//         {...rest}
//       />
//     </Form.Field>
//   );
// };

// export default DateInput;
