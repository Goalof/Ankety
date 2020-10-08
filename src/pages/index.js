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
		<Section background="#22262E" padding="10px 0 10px 0" quarkly-title="Header">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
		</Section>
		<Section padding="20px 0 20px 0" background="#22262E">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Image width="100%" height="600px" src="https://sun9-35.userapi.com/VzYuBGODIrw55sbgCW-LN1QU64ihcY2YU7B-Ug/svEnCdNSF6M.jpg" object-fit="cover" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-primary"
						padding="40px 0px 0px 0px"
					/>
					{"        "}
					<Text font="--headline1" margin="0px 0px 30px 0px" display="inline-block" color="--light">
						Куричев Иван
					</Text>
					<Box background="--color-light" width="80%" padding="20px 20px 20px 20px" border-radius="8px">
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
							{"  "}2 месяца в Quarkly
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
							{"  "}Из саппорта uKit в верстку
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
							Знаю CSS, HTML, JS. В данный момент изучаю сейчас React для Quarkly, изучаю на uDemy.
							<br />
							<br />
							Поза прошлый Battle делал на uKit и был самым медленным (3-40)
							<br />
							<br />
							В свободное время играю в футбол в чемпионате города, и развиваю свои телеграм каналы и боты
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#22262E" padding="0px 0 0px 0" quarkly-title="Knopa">
			<Override slot="SectionContent" align-items="center" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						width="100%"
					/>
					<Link
						href="/next1"
						padding="20px 0px 30px 0px"
						width="100%"
						color="#ffffff"
						font="--headline2"
						text-align="center"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
					>
						Cледующий
					</Link>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});