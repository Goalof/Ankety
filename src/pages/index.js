import React from "react";
import theme from "theme";
import { Theme, Text, Image, Strong, Span, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Первый участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="#4557FF" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" src="https://softwareengineeringdaily.com/wp-content/uploads/2019/10/webflow.jpg" object-fit="contain" />
		</Section>
		<Section padding="50px 0 50px 0" background="#4557FF" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-44-12.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-red"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Артем Копыток
						</Strong>
						<br />
						{"\n\n"}
					</Text>
					<Box background="--color-light" width="80%" padding="20px 20px 20px 20px" border-radius="8px">
						<Text font="normal 300 22px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 25px 0px" display="inline-block">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Опыт:
							</Strong>
							{"  "}IT с бэкэнд JAVA, попробовал вёрстку, попробовал MUSE CC{"\n\n "}
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
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Идет до конца, не остановится ни перед каким макетом
							</Span>
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Второй участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="#4557FF" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" src="https://softwareengineeringdaily.com/wp-content/uploads/2019/10/webflow.jpg" object-fit="contain" />
		</Section>
		<Section padding="50px 0 50px 0" background="#4557FF" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-48-37.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-green"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong>
							Слава Федосенко
						</Strong>
						<br />
						{"\n\n"}
					</Text>
					<Box background="--color-light" width="80%" padding="20px 20px 20px 20px" border-radius="8px">
						<Text font="normal 300 22px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 25px 0px" display="inline-block">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Опыт в конструкторе:
							</Strong>
							{"  "}3 года
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
							Ради верстки готов бросить все!{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Третий участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="#4557FF" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" src="https://softwareengineeringdaily.com/wp-content/uploads/2019/10/webflow.jpg" object-fit="contain" />
		</Section>
		<Section padding="50px 0 50px 0" background="#4557FF" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-59-45.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-purple"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong font="700 62px/86.4px &quot;Source Sans Pro&quot;, sans-serif">
							Вячеслав Володин
						</Strong>
						<br />
						{"\n\n"}
					</Text>
					<Box background="--color-light" width="80%" padding="20px 20px 20px 20px" border-radius="8px">
						<Text font="normal 300 22px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 25px 0px" display="inline-block">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Опыт в конструкторе:
							</Strong>
							{"   "}5 лет - это вам не шутки!{"\n\n"}
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
							Фронт, не любящий конструкторы{"\n\n"}
							<br />
							Всегда имеет в запасе парочку проверенных логических цепочек
							<br />
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Четвертый участник{"\n\n"}
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="--color-light" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/kisspng-symbol-logo-hand-sign-palm-hands-5b3a181c04b6f2.1767429615305339160193.png?v=2020-10-08T13:28:44.613Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="--color-light" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-29-58.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
						lg-border-radius="0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-orange"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						Данил Стоянов
					</Text>
					<Box background="--color-light" width="80%" padding="20px 20px 20px 20px" border-radius="8px">
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
							{"  \n"}Джуниор фронтенд разработчик в крупной IT компании{"\n\n"}
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
							Не прошел собеседование в uKit 2к18 году, но не опускает рук и осваивает ремесло верстки
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Пятый участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="--color-light" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/kisspng-symbol-logo-hand-sign-palm-hands-5b3a181c04b6f2.1767429615305339160193.png?v=2020-10-08T13:28:44.613Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="--color-light" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-31-18.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-secondary"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						Данил Стоянов
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
							{"  "}6 месяцев
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
							{"  \n\n"}просто мечтает стать сильным программистом{"\n\n\n\n"}
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
							обладает очень красивым портфолио{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Шестой участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="--color-light" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/kisspng-symbol-logo-hand-sign-palm-hands-5b3a181c04b6f2.1767429615305339160193.png?v=2020-10-08T13:28:44.613Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="--color-light" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-38-26.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-grey"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						Артем
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
							{"  "}8 месяцев
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
							{"  \n"}начинающий фулстек{"\n\n"}
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
							не понаслышке знаком с силой настоящего ковра{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Седьмой участник
			</Text>
		</Section>
		<Section padding="30px 0 10px 0" quarkly-title="Header" background="--color-light" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/kisspng-symbol-logo-hand-sign-palm-hands-5b3a181c04b6f2.1767429615305339160193.png?v=2020-10-08T13:28:44.613Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="--color-light" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-20-00-13.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-grey"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
					/>
					{"        "}
					<Text
						font="normal 900 63px/1.2 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong>
							Хализов Максим
						</Strong>
						<br />
						{"\n\n"}
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
							{"  "}5 лет непрерывного роста{"\n\n\n\n"}
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
							Пресвятой  CSS
							<br />
							Дуализм перфекционизма{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Восьмой участник{"\n\n"}
			</Text>
		</Section>
		<Section background="#fa8669" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/4.png?v=2020-10-08T12:44:32.908Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="#FA8669" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" border-radius="8px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-21-07-08.png"
						height="600px"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="40px 0px 40px 0px"
						background="--color-light"
						md-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--dark"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						Артем Иванов
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
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Девятый участник
			</Text>
		</Section>
		<Section background="#fa8669" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/5f7f021a3d84d4001ec38356/images/4.png?v=2020-10-08T12:44:32.908Z" />
		</Section>
		<Section padding="50px 0 50px 0" background="#FA8669" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" border-radius="8px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-20-57-10.png"
						height="600px"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="40px 0px 40px 0px"
						background="--color-light"
						md-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 62px/1.2 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--dark"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong>
							Григорий Храпатов
						</Strong>
						<br />
						{"\n\n"}
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
							{"  "}5 лет назад начал на uCoz{"\n\n"}
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
							Моя цель это создавать крутые и необычные проекты, предлагать новый взгляд на стандартные вещи, а ещё я хочу поработать над каким-нибудь проектом в большой команде и прокачать свои навыки
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Десятый участник
			</Text>
		</Section>
		<Section background="#498AFA" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" src="https://logo.ucoz.com/LOGOBlack.png" />
		</Section>
		<Section padding="50px 0 50px 0" background="#498AFA" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-20-51-25.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						background="--color-light"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 55px/1.2 --fontFamily-googleSourceSansPro"
						margin="60px 0px 60px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
					>
						<Strong>
							Сергей Мельников
						</Strong>
						<br />
						{"\n\n"}
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
							{"  "}3,5 года
						</Text>
						<Text font="normal 300 21px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 20px 0px" display="inline-block" />
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
							{"  \n"}создание сайтов на DIVLY{"\n\n"}
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
							Альтер-это  - педагог, который учит детей создавать роботов.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Одиннадцатый участник
			</Text>
		</Section>
		<Section background="#22262E" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
		</Section>
		<Section padding="50px 0 50px 0" background="#22262E" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-18-18.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
						lg-border-radius="0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-primary"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
					>
						<Strong lg-font="700 40px/86.4px &quot;Source Sans Pro&quot;, sans-serif">
							Александр Сулин
						</Strong>
						<br />
						{"\n\n"}
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
							{"  "}Более 1-го месяца в Quarkly
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
							{"  "}Стажер Quarkly
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
							верстает семантично и валидно.
							<br />
							{" "}смертельный прием уничижает отсутствием вредных привычек
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Двенадцатый участник
			</Text>
		</Section>
		<Section background="#22262E" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
		</Section>
		<Section padding="50px 0 50px 0" background="#22262E" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-17-47.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
						lg-border-radius="0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-primary"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 62px/1.2 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong>
							Кудинов Александр
						</Strong>
						<br />
						{"\n\n"}
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
							{"  \n"}черный пояс по LESS-CSS{"\n\n"}
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
							{"  \n"}фронтенд девелопер
							<br />
							{"\n\n"}
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
							обезоруживает улыбкой{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Тринадцатый участник
			</Text>
		</Section>
		<Section background="#22262E" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
		</Section>
		<Section padding="50px 0 50px 0" background="#22262E" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://sun9-35.userapi.com/VzYuBGODIrw55sbgCW-LN1QU64ihcY2YU7B-Ug/svEnCdNSF6M.jpg"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
						lg-border-radius="0px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						background="--color-primary"
						padding="40px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 62px/1.2 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
						lg-font="normal 900 40px/1.2 Source Sans Pro, sans-serif"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Иван Куричев
						</Strong>
						<br />
						{"\n\n"}
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
							{"  "}от техподдержки до созданий сайтов
							<br />
							{"\n\n"}
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
							имеет в загашнике второе место в батле, давит авторитетом{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Четырнадцатый участник
			</Text>
		</Section>
		<Section background="#D02E5F" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://financesonline.com/uploads/2019/08/Elementor-logo1.png" />
		</Section>
		<Section padding="50px 0 50px 0" background="#D02E5F" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-19-22-26.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						background="--color-purple"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 55px/1.2 --fontFamily-googleSourceSansPro"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
					>
						Селенков Александр
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
							{"  "}3-х летний багаж
						</Text>
						<Text font="normal 300 21px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 20px 0px" display="inline-block" />
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
							в совершенстве владеет костылями, но можно обезоружить кофе{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="0px 0 10px 0" background="#29C88E">
			<Text font="normal 900 72px/1.2 --fontFamily-googleSourceSansPro" text-align="center" color="--light" lg-font="normal 900 40px/1.2 --fontFamily-googleSourceSansPro">
				Пятнадцатый участник
			</Text>
		</Section>
		<Section background="#D02E5F" padding="30px 0 10px 0" quarkly-title="Header" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://financesonline.com/uploads/2019/08/Elementor-logo1.png" />
		</Section>
		<Section padding="50px 0 50px 0" background="#D02E5F" lg-padding="0px 0 0px 0">
			<Override slot="SectionContent" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					{"        "}
					<Image
						width="100%"
						height="600px"
						src="https://screenshot.ukit.com/src/goalov/20/2020-10-08-20-09-01.png"
						object-fit="cover"
						border-radius="8px 0px 0px 8px"
					/>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						lg-padding="40px 0px 40px 0px"
						border-radius="0px 8px 8px 0px"
						background="--color-purple"
						lg-border-radius="0px"
					/>
					{"        "}
					<Text
						font="normal 900 55px/1.2 --fontFamily-googleSourceSansPro"
						margin="60px 0px 60px 0px"
						display="inline-block"
						color="--light"
						sm-text-align="center"
					>
						Айнура  Торе
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
							{"  "}3-х летний багаж
						</Text>
						<Text font="normal 300 21px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 20px 0px" display="inline-block" />
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
							{"  \n"}создание сайтов на DIVLY{"\n\n"}
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
							хочет сделать крупный кинопортал про индийское кино){"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});