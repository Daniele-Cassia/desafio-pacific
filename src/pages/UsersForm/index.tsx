import { FormControl } from '@mui/base/FormControl';
import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { UserData, emptyUserData } from '../../utils/types/UserData';
import { useUserData } from '../../utils/contexts/UserDataContext';
import { useNavigate } from 'react-router-dom';

export function UsersForm() {
  const { addDataToFormList } = useUserData();
  const [formData, setFormData] = React.useState<UserData>(emptyUserData);
  const navigate = useNavigate();

  function updateData(newFormData: Partial<UserData>) {
    // console.log(newFormData)
    setFormData({ ...formData, ...newFormData });
  }
  function handleSubmit() {
    addDataToFormList(formData)
    navigate(`/${formData.name}/details`)
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 5,
          borderRadius: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <FormControl defaultValue="" required>
            <div>
              <TextField
                id="standard-search"
                label="Nome"
                type="search"
                variant="standard"
                required
                InputLabelProps={{ shrink: true }}
                error={formData.name == " " || formData.name == ""}
                helperText={formData.name == " " || formData.name == "" ? "Campo obrigatório" : ""}
                onChange={(e) => updateData({ name: e.target.value })}
              />
              <TextField
                id="standard-search"
                label=" Email"
                type="search"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ email: e.target.value })}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Telefone"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ phone: e.target.value })}
              />
              <TextField
                id="standard-search"
                label=" Data de Nascimento"
                type="date"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ birth: e.target.value })}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Rua"
                type="search"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ street: e.target.value })}
              />
              <TextField
                id="standard-search"
                label=" Número"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ number: e.target.value })}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="CEP"
                type="number"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ cep: e.target.value })}
              />
              <TextField
                id="standard-search"
                label="Estado"
                type="search"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ state: e.target.value })}
              />
            </div>
            <div>
              <TextField
                id="standard-search"
                label="Raça/Cor"
                type="search"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ race: e.target.value })}
              />
              <TextField
                id="standard-search"
                label="Gênero"
                type="search"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => updateData({ gender: e.target.value })}
              />
            </div>
            <div>
              <Button
                onClick={handleSubmit}
                disabled={formData.name == " " || formData.name == ""}>Salvar Dados</Button>
            </div>
          </FormControl>
        </form>
      </Box>
    </div>
  )
}