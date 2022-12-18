import {subtractHours} from "src/lib/date";

interface IPagination<T> {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: T;
}

const today = new Date();

const commentsPage1: IPagination<any[]> = {
    pagination: {
        page: 1,
        size: 6,
        total_pages: 3,
    },
    data: [
        {
            id: 1,
            created: subtractHours(today, 1).toISOString(),
            text: "The Force will be with you. Always.",
            author: 1,
            parent: null,
            likes: 1024,
        },
        {
            id: 13,
            created: subtractHours(today, 3).toISOString(),
            text: "Everything is proceeding as I have foreseen.",
            author: 8,
            parent: null,
            likes: 37,
        },
        {
            id: 200,
            created: "2021-07-04T14:44:01.038111+00:00",
            text:
                "There is no escape.\n" +
                "Don’t make me destroy you.\n" +
                "Luke…\n" +
                "You do not yet realize\n" +
                "Your importance.\n" +
                "You have only begun\n" +
                "To discover your power.\n" +
                "Join me, and I will complete\n" +
                "Your training.\n" +
                "With our combined strength\n" +
                "We can end this destructive conflict.\n" +
                "And bring order to the galaxy.",
            author: 3,
            parent: null,
            likes: 3,
        },
        {
            id: 2,
            created: subtractHours(today, 6).toISOString(),
            text: "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.",
            author: 2,
            parent: null,
            likes: 0,
        },
        {
            id: 3,
            created: subtractHours(today, 7).toISOString(),
            text: "Just for once, let me look on you with my own eyes.",
            author: 3,
            parent: null,
            likes: 2,
        },
        {
            id: 204,
            created: "2021-07-04T14:44:40.038111+00:00",
            text: "No.\n" + "I am your father.",
            author: 3,
            parent: 203,
            likes: 238,
        },

        {
            id: 206,
            created: "2021-07-04T14:45:30.038111+00:00",
            text: "Search your feelings.\n" + "You know it to be true!",
            author: 3,
            parent: 205,
            likes: 2,
        },
        {
            id: 207,
            created: "2021-07-04T14:46:00.038111+00:00",
            text: "NOOOOOOOOOOO!\n" + "NOOOOOOOOOO!",
            author: 5,
            parent: 206,
            likes: 300,
        },
        {
            id: 201,
            created: "2021-07-04T14:44:11.038111+00:00",
            text: "I’ll never join you!",
            author: 5,
            parent: 200,
            likes: 10,
        },
        {
            id: 203,
            created: "2021-07-04T14:44:20.038111+00:00",
            text: "He told me enough.\n" + "He told me you killed him.",
            author: 5,
            parent: 202,
            likes: 14,
        },
        {
            id: 202,
            created: "2021-07-04T14:44:14.038111+00:00",
            text:
                "If you only knew the power\n" +
                "Of the dark side.\n" +
                "Obi Wan never told you\n" +
                "What happened to your father.\n",
            author: 3,
            parent: 201,
            likes: 5,
        },
        {
            id: 205,
            created: "2021-07-04T14:45:10.038111+00:00",
            text: "No… No…\n" + "That’s not true….\n" + "THAT’S IMPOSSIBLE!",
            author: 5,
            parent: 204,
            likes: 1,
        },
        {
            id: 4,
            created: subtractHours(today, 8).toISOString(),
            text: "Someday I will be the most powerful Jedi ever.",
            author: 4,
            parent: null,
            likes: 5,
        },
    ],
};

const commentsPage2: IPagination<any[]> = {
    pagination: {
        page: 2,
        size: 6,
        total_pages: 3,
    },
    data: [
        {
            id: 5,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "If you strike me down I shall become more powerful than you can possibly imagine.",
            author: 1,
            parent: null,
            likes: 0,
        },
        {
            id: 100,
            created: "2021-07-04T14:44:01.038111+00:00",
            text: "Hello there!",
            author: 1,
            parent: null,
            likes: 50,
        },
        {
            id: 6,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.",
            author: 2,
            parent: null,
            likes: 45,
        },
        {
            id: 8,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.",
            author: 5,
            parent: null,
            likes: 78,
        },
        {
            id: 7,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Do. Or do not. There is no try.",
            author: 2,
            parent: null,
            likes: 5,
        },
        {
            id: 38,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Chewie, we’re home.",
            author: 6,
            parent: null,
            likes: 13,
        },
        {
            id: 39,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR",
            author: 10,
            parent: 38,
            likes: 125,
        },
        {
            id: 101,
            created: "2021-07-04T14:44:10.038111+00:00",
            text: "General Kenobi",
            author: 9,
            parent: 100,
            likes: 2,
        },
    ],
};

const commentsPage3: IPagination<any[]> = {
    pagination: {
        page: 3,
        size: 6,
        total_pages: 3,
    },
    data: [
        {
            id: 9,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Your focus determines your reality.",
            author: 7,
            parent: null,
            likes: 2,
        },
        {
            id: 300,
            created: "2020-07-04T14:44:01.038111+00:00",
            text: "It's over Anakin! I have the high ground!",
            author: 1,
            parent: null,
            likes: 10,
        },
        {
            id: 10,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Obi-Wan Kenobi. Obi-Wan. Now that’s a name I have not heard in a long time. A long time.",
            author: 1,
            parent: null,
            likes: 5,
        },
        {
            id: 11,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "There’s always a bigger fish.",
            author: 7,
            parent: null,
            likes: 7,
        },
        {
            id: 12,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "Hokey religions and ancient weapons are no match for a good blaster at your side, kid.",
            author: 6,
            parent: null,
            likes: 12,
        },
        {
            id: 16,
            created: "2021-07-05T14:44:01.038111+00:00",
            text: "A Fine Addition To My Collection.",
            author: 9,
            parent: null,
            likes: 23,
        },
        {
            id: 301,
            created: "2020-07-04T14:44:30.038111+00:00",
            text: "You underestimate my power!",
            author: 4,
            parent: 300,
            likes: 325,
        },
        {
            id: 302,
            created: "2020-07-04T14:44:55.038111+00:00",
            text: "Don't try it!",
            author: 1,
            parent: 301,
            likes: 1,
        },
    ],
};

export {commentsPage1, commentsPage2, commentsPage3};
