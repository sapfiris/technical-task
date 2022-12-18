import {useMemo} from "react";
import {CommentList} from "src/components/CommentList/CommentList";
import {
    Container,
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    styled,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import "./App.css";

const StyledCommentsContainer = styled(Container)(
    ({theme: {breakpoints, spacing}}) => ({
        minHeight: "100vh",
        padding: spacing(2),
        width: "100%",
        [breakpoints.up("md")]: {
            padding: spacing(5, 2),
            maxWidth: "75%",
        },
        [breakpoints.up("lg")]: {
            maxWidth: "50%",
        },
    }),
);

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createTheme({
                    palette: {mode: prefersDarkMode ? "dark" : "light"},
                }),
            ),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledCommentsContainer>
                <CommentList />
            </StyledCommentsContainer>
        </ThemeProvider>
    );
}

export default App;
