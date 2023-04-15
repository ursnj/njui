import { useState } from 'react';
import { NTheme } from './components/NTheme';
import MenuExample from './examples/MenuExample';
import SelectExample from './examples/SelectExample';
import DialogExample from './examples/DialogExample';
import SwitchExample from './examples/SwitchExample';
import DisClosureExample from './examples/DisClosureExample';
import PopoverExample from './examples/PopoverExample';
import RadioGroupExample from './examples/RadioGroupExample';
import ComboExample from './examples/ComboExample';
import { NDivider } from './components/NDivider';
import InputExample from './examples/InputExample';
import { NText } from './components/NText';
import TabsExample from './examples/TabsExample';
import AlertExample from './examples/AlertExample';
import BadgeExample from './examples/BadgeExample';
import ButtonExample from './examples/ButtonExample';
import CardExample from './examples/CardExample';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('THEME'));

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('THEME', newTheme);
    setTheme(newTheme);
  };

  return (
    <NTheme theme={theme}>
      <div className="p-3">
        <div className="max-w-lg m-auto">
          <div className="my-5">
            <NText className="cursor-pointer nyn-text-primary" text="Toggle Theme" onClick={changeTheme} />
          </div>
          <NDivider />
          <AlertExample />
          <BadgeExample />
          <ButtonExample />
          <CardExample />
          <DisClosureExample />
          <InputExample />
          <SelectExample />
          <ComboExample />
          <RadioGroupExample />
          <TabsExample />
          <DialogExample />
          <MenuExample />
          <PopoverExample />
          <SwitchExample />
        </div>
      </div>
    </NTheme>
  );
};

export default App;
