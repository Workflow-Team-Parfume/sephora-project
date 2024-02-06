import Box from "@mui/material/Box";
import "./homeFooter.scss";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const HomeFooter = () => {
  return (
    <>
      <div className="main_footer">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start" },
            justifyContent: { xs: "center" },
            gap: 3,
            paddingLeft: 18,
            paddingTop: 10,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              alignItems: { xs: "flex-start" },
              gap: 0,
              width: 156,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
              Про доставку
            </Typography>
            <Button color="inherit">Способи оплати</Button>
            <Button color="inherit">Про продукцію</Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "center" },
              gap: 0,
              width: 178,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
              Beauty Club
            </Typography>
            <Button color="inherit">Умови використання</Button>
            <Button color="inherit">Повернення та обмін</Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "center" },
              gap: 0,
              width: 190,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
              Про нас
            </Typography>
            <Button color="inherit">Контакти</Button>
            <Button color="inherit">Додаток</Button>
            <Button color="inherit">Партнерська програма</Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "center" },
              gap: 0,
              width: 87,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
              Статті
            </Typography>
            <Button color="inherit">Новини</Button>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              alignItems: { xs: "flex-start" },
              justifyContent: { xs: "center" },
              gap: 0,
              width: 481,
            }}
          >
            <Typography variant="h3" gutterBottom id="links" paddingBottom={2}>
              Служба підтримки
            </Typography>
            <Button color="inherit">(068) 753 32 89</Button>
            <Button color="inherit">(098) 316 67 50</Button>
            <Button color="inherit">
              Ви можете написати нам лист або залелефонувати за <br />
              номерами щоденно з 8:00 до 18:00
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default HomeFooter;