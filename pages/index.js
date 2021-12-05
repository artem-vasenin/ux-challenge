import {Box, Center, Text} from "@chakra-ui/react";
import {useState} from "react";
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import {chatData, userData} from "../mocks/chatData";
import QuestionCard from "../components/question-card/QuestionCard";

const Home = () => {
  /** Questions list */
  const [data, setData] = useState(chatData);

  /**
   *  Adding a new comment to the state
   * @param item - current question.
   * @param reply - new reply text.
   */
  const submit = (item, reply) => {
    item.replies.push({
      id: Date.now(),
      replies: [],
      reply: {
        title: item.question.title,
        content: `<p>${reply}</p>`,
        lastUpdate: Date.now(),
      },
      user: userData,
    });
    setData(data.map(q => (q.id === item.id) ? item : q));
  };

  return (
    <>
      <Head>
        <title>UX-Challenge</title>
        <meta name="description" content="Ux challenge for Ted"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Box as="header" h="50" w="100%" bg='gray.900' className="header"/>
      <Box as="main" className={styles.main} bg='gray.800'>
        <Box as="aside" bg="gray.800" className={styles.sidebar__left}/>

        <Box className={styles.content} bg="gray.800" p='2'>
          {Array.isArray(data) && data.length ? data.map((item) => (
            <QuestionCard
              key={item.id}
              item={item}
              submit={submit}
            />
          )) : (
            <Center className={styles.isEmpty}>
              <Text color='gray.500' isTruncated>The list of questions is still empty</Text>
            </Center>
          )}
        </Box>

        <Box as="aside" bg="gray.800" className={styles.sidebar__right}/>
      </Box>
    </>
  )
}

export default Home;
