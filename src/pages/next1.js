import React from "react";
import theme from "theme";
import { Theme, Image, Text, Strong, Box, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#fa8669" padding="10px 0 10px 0" quarkly-title="Header">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/4.png?v=2020-10-08T12:44:32.908Z" />
		</Section>
		<Section padding="20px 0 20px 0" background="#FA8669">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" border-radius="8px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/1.jpg?v=2020-10-08T12:42:23.346Z" height="600px" object-fit="cover" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="40px 0px 40px 0px"
						background="--color-light"
						md-padding="40px 0px 40px 0px"
					/>
					{"        "}
					<Text font="--headline1" margin="0px 0px 30px 0px" display="inline-block" color="--dark">
						Артем
					</Text>
					<Box width="80%" padding="20px 20px 20px 20px" background="#fa8669" border-radius="8px">
						<Text font="normal 300 22px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 5px 0px" display="inline-block">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Опыт с конструктором:
							</Strong>
							{"  "}4 года в Tilda
						</Text>
						<Text font="normal 300 21px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 20px 0px" display="inline-block">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Основная деятельность:
							</Strong>
							{"  "}Фрилансит на Tilda
						</Text>
						<Text font="normal 300 27px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 10px 0px" display="inline-block" width="100%">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Биография:
							</Strong>
							{" "}
						</Text>
						<Text font="normal 300 18px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block">
							Уже 4 года как делаю на Тильде со всей любовью разные проекты от дизайна до верстки. 
Участвую что бы учится всегда новому и проверить себя, смогу ли качественно реализовать работу в сжатий срок
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#fa8669" padding="0px 0 0px 0" quarkly-title="Knopa" border-width="1px">
			<Override slot="SectionContent" align-items="center" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Link
						width="100%"
						padding="20px 0px 30px 0px"
						color="#ffffff"
						font="--headline2"
						text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
						href="/next1"
						border-color="--color-dark"
					>
						Предыдущий
					</Link>
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						width="100%"
					/>
					<Link
						width="100%"
						padding="20px 0px 30px 0px"
						color="#ffffff"
						font="--headline2"
						text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
						href="/next2"
					>
						Cледующий
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});