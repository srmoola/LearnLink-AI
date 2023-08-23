import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  lang: string;
  setlang: React.Dispatch<React.SetStateAction<string>>;
};

export default function SelectLang({ lang, setlang }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setlang(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Afrikaans">Afrikaans</MenuItem>
          <MenuItem value="Albanian">Albanian</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
          <MenuItem value="Armenian">Armenian</MenuItem>
          <MenuItem value="Assamese">Assamese</MenuItem>
          <MenuItem value="Azerbaijani">Azerbaijani</MenuItem>
          <MenuItem value="Basque">Basque</MenuItem>
          <MenuItem value="Belarusian">Belarusian</MenuItem>
          <MenuItem value="Bengali">Bengali</MenuItem>
          <MenuItem value="Bosnian">Bosnian</MenuItem>
          <MenuItem value="Bulgarian">Bulgarian</MenuItem>
          <MenuItem value="Burmese">Burmese</MenuItem>
          <MenuItem value="Catalan">Catalan</MenuItem>
          <MenuItem value="Chinese">Chinese</MenuItem>
          <MenuItem value="Croatian">Croatian</MenuItem>
          <MenuItem value="Czech">Czech</MenuItem>
          <MenuItem value="Danish">Danish</MenuItem>
          <MenuItem value="Dutch">Dutch</MenuItem>
          <MenuItem value="Estonian">Estonian</MenuItem>
          <MenuItem value="Farsi">Farsi</MenuItem>
          <MenuItem value="Filipino">Filipino</MenuItem>
          <MenuItem value="Finnish">Finnish</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Galician">Galician</MenuItem>
          <MenuItem value="Georgian">Georgian</MenuItem>
          <MenuItem value="German">German</MenuItem>
          <MenuItem value="Greek">Greek</MenuItem>
          <MenuItem value="Gujarati">Gujarati</MenuItem>
          <MenuItem value="Haitian Creole">Haitian Creole</MenuItem>
          <MenuItem value="Hausa">Hausa</MenuItem>
          <MenuItem value="Hebrew">Hebrew</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Hmong">Hmong</MenuItem>
          <MenuItem value="Hungarian">Hungarian</MenuItem>
          <MenuItem value="Icelandic">Icelandic</MenuItem>
          <MenuItem value="Igbo">Igbo</MenuItem>
          <MenuItem value="Indonesian">Indonesian</MenuItem>
          <MenuItem value="Irish">Irish</MenuItem>
          <MenuItem value="Italian">Italian</MenuItem>
          <MenuItem value="Japanese">Japanese</MenuItem>
          <MenuItem value="Javanese">Javanese</MenuItem>
          <MenuItem value="Kannada">Kannada</MenuItem>
          <MenuItem value="Kazakh">Kazakh</MenuItem>
          <MenuItem value="Khmer">Khmer</MenuItem>
          <MenuItem value="Kinyarwanda">Kinyarwanda</MenuItem>
          <MenuItem value="Korean">Korean</MenuItem>
          <MenuItem value="Kurdish">Kurdish</MenuItem>
          <MenuItem value="Kyrgyz">Kyrgyz</MenuItem>
          <MenuItem value="Lao">Lao</MenuItem>
          <MenuItem value="Latvian">Latvian</MenuItem>
          <MenuItem value="Lithuanian">Lithuanian</MenuItem>
          <MenuItem value="Luxembourgish">Luxembourgish</MenuItem>
          <MenuItem value="Macedonian">Macedonian</MenuItem>
          <MenuItem value="Malagasy">Malagasy</MenuItem>
          <MenuItem value="Malay">Malay</MenuItem>
          <MenuItem value="Malayalam">Malayalam</MenuItem>
          <MenuItem value="Maltese">Maltese</MenuItem>
          <MenuItem value="Maori">Maori</MenuItem>
          <MenuItem value="Marathi">Marathi</MenuItem>
          <MenuItem value="Mongolian">Mongolian</MenuItem>
          <MenuItem value="Nepali">Nepali</MenuItem>
          <MenuItem value="Norwegian">Norwegian</MenuItem>
          <MenuItem value="Oriya">Oriya</MenuItem>
          <MenuItem value="Oromo">Oromo</MenuItem>
          <MenuItem value="Pashto">Pashto</MenuItem>
          <MenuItem value="Persian">Persian</MenuItem>
          <MenuItem value="Polish">Polish</MenuItem>
          <MenuItem value="Portuguese">Portuguese</MenuItem>
          <MenuItem value="Punjabi">Punjabi</MenuItem>
          <MenuItem value="Romanian">Romanian</MenuItem>
          <MenuItem value="Russian">Russian</MenuItem>
          <MenuItem value="Samoan">Samoan</MenuItem>
          <MenuItem value="Scots Gaelic">Scots Gaelic</MenuItem>
          <MenuItem value="Serbian">Serbian</MenuItem>
          <MenuItem value="Sesotho">Sesotho</MenuItem>
          <MenuItem value="Shona">Shona</MenuItem>
          <MenuItem value="Sindhi">Sindhi</MenuItem>
          <MenuItem value="Sinhala">Sinhala</MenuItem>
          <MenuItem value="Slovak">Slovak</MenuItem>
          <MenuItem value="Slovenian">Slovenian</MenuItem>
          <MenuItem value="Somali">Somali</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Sundanese">Sundanese</MenuItem>
          <MenuItem value="Swahili">Swahili</MenuItem>
          <MenuItem value="Swedish">Swedish</MenuItem>
          <MenuItem value="Tagalog">Tagalog</MenuItem>
          <MenuItem value="Tajik">Tajik</MenuItem>
          <MenuItem value="Tamil">Tamil</MenuItem>
          <MenuItem value="Tatar">Tatar</MenuItem>
          <MenuItem value="Telugu">Telugu</MenuItem>
          <MenuItem value="Thai">Thai</MenuItem>
          <MenuItem value="Tigrinya">Tigrinya</MenuItem>
          <MenuItem value="Tongan">Tongan</MenuItem>
          <MenuItem value="Turkish">Turkish</MenuItem>
          <MenuItem value="Turkmen">Turkmen</MenuItem>
          <MenuItem value="Ukrainian">Ukrainian</MenuItem>
          <MenuItem value="Urdu">Urdu</MenuItem>
          <MenuItem value="Uzbek">Uzbek</MenuItem>
          <MenuItem value="Vietnamese">Vietnamese</MenuItem>
          <MenuItem value="Welsh">Welsh</MenuItem>
          <MenuItem value="Wolof">Wolof</MenuItem>
          <MenuItem value="Xhosa">Xhosa</MenuItem>
          <MenuItem value="Yiddish">Yiddish</MenuItem>
          <MenuItem value="Yoruba">Yoruba</MenuItem>
          <MenuItem value="Zulu">Zulu</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
