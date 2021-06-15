import Button from "./Button";
import { render } from "@testing-library/react";


 describe('Button', ()=>{

     describe('render', ()=>{
        it('should return a button', ()=>{
            const { container } = render(
                <Button onClick={()=>{}}/>
            );
            expect(container).toBeDefined();
            expect(container.innerHTML).toBe("<button>Hola mundo</button>");
        });

        it('should display the text', ()=>{
            const { getByText } = render(
                <Button onClick={()=>{}}/>
            );
           const text =  getByText('Hola mundo');
           expect(text).toHaveTextContent('Hola mundo');
        });
     });
 });