//type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace NetCodeMsg. */
declare namespace NetCodeMsg {

    /** cmd enum. */
    enum cmd {
        msg_base = 0,
        msg_login = 1,
        msg_room = 21,
        msg_rank = 22,
        msg_broadcast = 24,
        msg_winners = 25,
        msg_pool = 26,
        msg_report = 27,
        msg_act = 30,
        msg_mail = 31,
        msg_wallet = 32,
        msg_role_info = 33,
        msg_award = 34,
        msg_extend = 38
    }
}

/** Namespace ActMsg. */
declare namespace ActMsg {

    /** c_cmd enum. */
    enum c_cmd {
        act_list_req = 1,
        act_list_resp = 2,
        act_detail_info_req = 3,
        act_detail_info_resp = 4,
        red_bag_exchange_info_req = 5,
        red_bag_exchange_info_resp = 6,
        red_bag_exchange_req = 7,
        red_bag_exchange_resp = 8,
        red_bag_num_resp = 9,
        red_bag_add_resp = 10,
        act_code_resp = 11,
        world_cup_rank_reward_req = 12,
        world_cup_rank_reward_resp = 13,
        world_cup_reward_notice_resp = 14,
        world_cup_role_reward_req = 15,
        world_cup_role_reward_resp = 16,
        world_cup_notice_resp = 17,
        valentine_notice_resp = 18,
        nation_race_day_req = 19,
        nation_race_day_resp = 20,
        nation_race_info_req = 21,
        nation_race_info_resp = 22,
        nation_race_over_req = 23,
        nation_race_sign_resp = 24,
        nation_race_over_resp = 25,
        nation_day_notice_resp = 26,
        nation_volume_add_resp = 27,
        nation_day_reward_resp = 28,
        yuandan_daily_req = 29,
        yuandan_daily_resp = 30,
        yuandan_daily_reward_req = 31,
        yuandan_daily_reward_resp = 32,
        yuandan_notice_resp = 33,
        yuandan_reward_notice_resp = 34,
        top_12_notice_resp = 35
    }

    /** Represents a msg_act_service */
    class msg_act_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_act_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_act_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_act_service;

        /**
         * Calls act_list.
         * @param request act_list_req message or plain object
         * @param callback Node-style callback called with the error, if any, and act_list_resp
         */
        public act_list(request: ActMsg.Iact_list_req, callback: ActMsg.msg_act_service.act_listCallback): void;

        /**
         * Calls act_list.
         * @param request act_list_req message or plain object
         * @returns Promise
         */
        public act_list(request: ActMsg.Iact_list_req): Promise<ActMsg.act_list_resp>;

        /**
         * Calls act_detail_info.
         * @param request act_detail_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and act_detail_info_resp
         */
        public act_detail_info(request: ActMsg.Iact_detail_info_req, callback: ActMsg.msg_act_service.act_detail_infoCallback): void;

        /**
         * Calls act_detail_info.
         * @param request act_detail_info_req message or plain object
         * @returns Promise
         */
        public act_detail_info(request: ActMsg.Iact_detail_info_req): Promise<ActMsg.act_detail_info_resp>;

        /**
         * Calls red_bag_exchange_info.
         * @param request red_bag_exchange_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and red_bag_exchange_info_resp
         */
        public red_bag_exchange_info(request: ActMsg.Ired_bag_exchange_info_req, callback: ActMsg.msg_act_service.red_bag_exchange_infoCallback): void;

        /**
         * Calls red_bag_exchange_info.
         * @param request red_bag_exchange_info_req message or plain object
         * @returns Promise
         */
        public red_bag_exchange_info(request: ActMsg.Ired_bag_exchange_info_req): Promise<ActMsg.red_bag_exchange_info_resp>;

        /**
         * Calls red_bag_exchange.
         * @param request red_bag_exchange_req message or plain object
         * @param callback Node-style callback called with the error, if any, and red_bag_exchange_resp
         */
        public red_bag_exchange(request: ActMsg.Ired_bag_exchange_req, callback: ActMsg.msg_act_service.red_bag_exchangeCallback): void;

        /**
         * Calls red_bag_exchange.
         * @param request red_bag_exchange_req message or plain object
         * @returns Promise
         */
        public red_bag_exchange(request: ActMsg.Ired_bag_exchange_req): Promise<ActMsg.red_bag_exchange_resp>;

        /**
         * Calls red_bag_num.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and red_bag_num_resp
         */
        public red_bag_num(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.red_bag_numCallback): void;

        /**
         * Calls red_bag_num.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public red_bag_num(request: CommonMsg.Iundefined): Promise<ActMsg.red_bag_num_resp>;

        /**
         * Calls red_bag_add.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and red_bag_add_resp
         */
        public red_bag_add(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.red_bag_addCallback): void;

        /**
         * Calls red_bag_add.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public red_bag_add(request: CommonMsg.Iundefined): Promise<ActMsg.red_bag_add_resp>;

        /**
         * Calls world_cup_rank_reward.
         * @param request world_cup_rank_reward_req message or plain object
         * @param callback Node-style callback called with the error, if any, and world_cup_rank_reward_resp
         */
        public world_cup_rank_reward(request: ActMsg.Iworld_cup_rank_reward_req, callback: ActMsg.msg_act_service.world_cup_rank_rewardCallback): void;

        /**
         * Calls world_cup_rank_reward.
         * @param request world_cup_rank_reward_req message or plain object
         * @returns Promise
         */
        public world_cup_rank_reward(request: ActMsg.Iworld_cup_rank_reward_req): Promise<ActMsg.world_cup_rank_reward_resp>;

        /**
         * Calls world_cup_reward_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and world_cup_reward_notice_resp
         */
        public world_cup_reward_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.world_cup_reward_noticeCallback): void;

        /**
         * Calls world_cup_reward_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public world_cup_reward_notice(request: CommonMsg.Iundefined): Promise<ActMsg.world_cup_reward_notice_resp>;

        /**
         * Calls world_cup_role_reward.
         * @param request world_cup_role_reward_req message or plain object
         * @param callback Node-style callback called with the error, if any, and world_cup_role_reward_resp
         */
        public world_cup_role_reward(request: ActMsg.Iworld_cup_role_reward_req, callback: ActMsg.msg_act_service.world_cup_role_rewardCallback): void;

        /**
         * Calls world_cup_role_reward.
         * @param request world_cup_role_reward_req message or plain object
         * @returns Promise
         */
        public world_cup_role_reward(request: ActMsg.Iworld_cup_role_reward_req): Promise<ActMsg.world_cup_role_reward_resp>;

        /**
         * Calls world_cup_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and world_cup_notice_resp
         */
        public world_cup_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.world_cup_noticeCallback): void;

        /**
         * Calls world_cup_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public world_cup_notice(request: CommonMsg.Iundefined): Promise<ActMsg.world_cup_notice_resp>;

        /**
         * Calls valentine_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and valentine_notice_resp
         */
        public valentine_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.valentine_noticeCallback): void;

        /**
         * Calls valentine_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public valentine_notice(request: CommonMsg.Iundefined): Promise<ActMsg.valentine_notice_resp>;

        /**
         * Calls nation_volume_add.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_volume_add_resp
         */
        public nation_volume_add(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.nation_volume_addCallback): void;

        /**
         * Calls nation_volume_add.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public nation_volume_add(request: CommonMsg.Iundefined): Promise<ActMsg.nation_volume_add_resp>;

        /**
         * Calls nation_race_day.
         * @param request nation_race_day_req message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_race_day_resp
         */
        public nation_race_day(request: ActMsg.Ination_race_day_req, callback: ActMsg.msg_act_service.nation_race_dayCallback): void;

        /**
         * Calls nation_race_day.
         * @param request nation_race_day_req message or plain object
         * @returns Promise
         */
        public nation_race_day(request: ActMsg.Ination_race_day_req): Promise<ActMsg.nation_race_day_resp>;

        /**
         * Calls nation_race_info.
         * @param request nation_race_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_race_info_resp
         */
        public nation_race_info(request: ActMsg.Ination_race_info_req, callback: ActMsg.msg_act_service.nation_race_infoCallback): void;

        /**
         * Calls nation_race_info.
         * @param request nation_race_info_req message or plain object
         * @returns Promise
         */
        public nation_race_info(request: ActMsg.Ination_race_info_req): Promise<ActMsg.nation_race_info_resp>;

        /**
         * Calls nation_race_over.
         * @param request nation_race_over_req message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_race_over_resp
         */
        public nation_race_over(request: ActMsg.Ination_race_over_req, callback: ActMsg.msg_act_service.nation_race_overCallback): void;

        /**
         * Calls nation_race_over.
         * @param request nation_race_over_req message or plain object
         * @returns Promise
         */
        public nation_race_over(request: ActMsg.Ination_race_over_req): Promise<ActMsg.nation_race_over_resp>;

        /**
         * Calls nation_race_over_sign.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_race_sign_resp
         */
        public nation_race_over_sign(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.nation_race_over_signCallback): void;

        /**
         * Calls nation_race_over_sign.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public nation_race_over_sign(request: CommonMsg.Iundefined): Promise<ActMsg.nation_race_sign_resp>;

        /**
         * Calls nation_day_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_day_notice_resp
         */
        public nation_day_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.nation_day_noticeCallback): void;

        /**
         * Calls nation_day_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public nation_day_notice(request: CommonMsg.Iundefined): Promise<ActMsg.nation_day_notice_resp>;

        /**
         * Calls nation_role_reward.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and nation_day_reward_resp
         */
        public nation_role_reward(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.nation_role_rewardCallback): void;

        /**
         * Calls nation_role_reward.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public nation_role_reward(request: CommonMsg.Iundefined): Promise<ActMsg.nation_day_reward_resp>;

        /**
         * Calls yuandan_daily.
         * @param request yuandan_daily_req message or plain object
         * @param callback Node-style callback called with the error, if any, and yuandan_daily_resp
         */
        public yuandan_daily(request: ActMsg.Iyuandan_daily_req, callback: ActMsg.msg_act_service.yuandan_dailyCallback): void;

        /**
         * Calls yuandan_daily.
         * @param request yuandan_daily_req message or plain object
         * @returns Promise
         */
        public yuandan_daily(request: ActMsg.Iyuandan_daily_req): Promise<ActMsg.yuandan_daily_resp>;

        /**
         * Calls yuandan_daily_reward.
         * @param request yuandan_daily_reward_req message or plain object
         * @param callback Node-style callback called with the error, if any, and yuandan_daily_reward_resp
         */
        public yuandan_daily_reward(request: ActMsg.Iyuandan_daily_reward_req, callback: ActMsg.msg_act_service.yuandan_daily_rewardCallback): void;

        /**
         * Calls yuandan_daily_reward.
         * @param request yuandan_daily_reward_req message or plain object
         * @returns Promise
         */
        public yuandan_daily_reward(request: ActMsg.Iyuandan_daily_reward_req): Promise<ActMsg.yuandan_daily_reward_resp>;

        /**
         * Calls yuandan_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and yuandan_notice_resp
         */
        public yuandan_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.yuandan_noticeCallback): void;

        /**
         * Calls yuandan_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public yuandan_notice(request: CommonMsg.Iundefined): Promise<ActMsg.yuandan_notice_resp>;

        /**
         * Calls yuandan_reward_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and yuandan_reward_notice_resp
         */
        public yuandan_reward_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.yuandan_reward_noticeCallback): void;

        /**
         * Calls yuandan_reward_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public yuandan_reward_notice(request: CommonMsg.Iundefined): Promise<ActMsg.yuandan_reward_notice_resp>;

        /**
         * Calls top_12_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and top_12_notice_resp
         */
        public top_12_notice(request: CommonMsg.Iundefined, callback: ActMsg.msg_act_service.top_12_noticeCallback): void;

        /**
         * Calls top_12_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public top_12_notice(request: CommonMsg.Iundefined): Promise<ActMsg.top_12_notice_resp>;
    }

    namespace msg_act_service {

        /**
         * Callback as used by {@link ActMsg.msg_act_service#act_list}.
         * @param error Error, if any
         * @param [response] act_list_resp
         */
        type act_listCallback = (error: (Error | null), response?: ActMsg.act_list_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#act_detail_info}.
         * @param error Error, if any
         * @param [response] act_detail_info_resp
         */
        type act_detail_infoCallback = (error: (Error | null), response?: ActMsg.act_detail_info_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#red_bag_exchange_info}.
         * @param error Error, if any
         * @param [response] red_bag_exchange_info_resp
         */
        type red_bag_exchange_infoCallback = (error: (Error | null), response?: ActMsg.red_bag_exchange_info_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#red_bag_exchange}.
         * @param error Error, if any
         * @param [response] red_bag_exchange_resp
         */
        type red_bag_exchangeCallback = (error: (Error | null), response?: ActMsg.red_bag_exchange_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#red_bag_num}.
         * @param error Error, if any
         * @param [response] red_bag_num_resp
         */
        type red_bag_numCallback = (error: (Error | null), response?: ActMsg.red_bag_num_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#red_bag_add}.
         * @param error Error, if any
         * @param [response] red_bag_add_resp
         */
        type red_bag_addCallback = (error: (Error | null), response?: ActMsg.red_bag_add_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#world_cup_rank_reward}.
         * @param error Error, if any
         * @param [response] world_cup_rank_reward_resp
         */
        type world_cup_rank_rewardCallback = (error: (Error | null), response?: ActMsg.world_cup_rank_reward_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#world_cup_reward_notice}.
         * @param error Error, if any
         * @param [response] world_cup_reward_notice_resp
         */
        type world_cup_reward_noticeCallback = (error: (Error | null), response?: ActMsg.world_cup_reward_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#world_cup_role_reward}.
         * @param error Error, if any
         * @param [response] world_cup_role_reward_resp
         */
        type world_cup_role_rewardCallback = (error: (Error | null), response?: ActMsg.world_cup_role_reward_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#world_cup_notice}.
         * @param error Error, if any
         * @param [response] world_cup_notice_resp
         */
        type world_cup_noticeCallback = (error: (Error | null), response?: ActMsg.world_cup_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#valentine_notice}.
         * @param error Error, if any
         * @param [response] valentine_notice_resp
         */
        type valentine_noticeCallback = (error: (Error | null), response?: ActMsg.valentine_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_volume_add}.
         * @param error Error, if any
         * @param [response] nation_volume_add_resp
         */
        type nation_volume_addCallback = (error: (Error | null), response?: ActMsg.nation_volume_add_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_race_day}.
         * @param error Error, if any
         * @param [response] nation_race_day_resp
         */
        type nation_race_dayCallback = (error: (Error | null), response?: ActMsg.nation_race_day_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_race_info}.
         * @param error Error, if any
         * @param [response] nation_race_info_resp
         */
        type nation_race_infoCallback = (error: (Error | null), response?: ActMsg.nation_race_info_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_race_over}.
         * @param error Error, if any
         * @param [response] nation_race_over_resp
         */
        type nation_race_overCallback = (error: (Error | null), response?: ActMsg.nation_race_over_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_race_over_sign}.
         * @param error Error, if any
         * @param [response] nation_race_sign_resp
         */
        type nation_race_over_signCallback = (error: (Error | null), response?: ActMsg.nation_race_sign_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_day_notice}.
         * @param error Error, if any
         * @param [response] nation_day_notice_resp
         */
        type nation_day_noticeCallback = (error: (Error | null), response?: ActMsg.nation_day_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#nation_role_reward}.
         * @param error Error, if any
         * @param [response] nation_day_reward_resp
         */
        type nation_role_rewardCallback = (error: (Error | null), response?: ActMsg.nation_day_reward_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#yuandan_daily}.
         * @param error Error, if any
         * @param [response] yuandan_daily_resp
         */
        type yuandan_dailyCallback = (error: (Error | null), response?: ActMsg.yuandan_daily_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#yuandan_daily_reward}.
         * @param error Error, if any
         * @param [response] yuandan_daily_reward_resp
         */
        type yuandan_daily_rewardCallback = (error: (Error | null), response?: ActMsg.yuandan_daily_reward_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#yuandan_notice}.
         * @param error Error, if any
         * @param [response] yuandan_notice_resp
         */
        type yuandan_noticeCallback = (error: (Error | null), response?: ActMsg.yuandan_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#yuandan_reward_notice}.
         * @param error Error, if any
         * @param [response] yuandan_reward_notice_resp
         */
        type yuandan_reward_noticeCallback = (error: (Error | null), response?: ActMsg.yuandan_reward_notice_resp) => void;

        /**
         * Callback as used by {@link ActMsg.msg_act_service#top_12_notice}.
         * @param error Error, if any
         * @param [response] top_12_notice_resp
         */
        type top_12_noticeCallback = (error: (Error | null), response?: ActMsg.top_12_notice_resp) => void;
    }

    /** act_code enum. */
    enum act_code {
        SUCCESS = 1,
        FAIL = 2,
        UNDEFINED = 3,
        HAS_GET_REWARD = 4,
        NO_THIS_REWARD = 5,
        CAN_NOT_GET = 6,
        MAX_TIMES = 7,
        TREASURE_NO_NUM = 8,
        NO_ENOUGH_SCORE = 9,
        NO_INDEX = 10,
        NOT_BETWEEN_TIME = 11
    }

    /** Properties of an act_list_req. */
    interface Iact_list_req {
    }

    /** Represents an act_list_req. */
    class act_list_req implements Iact_list_req {

        /**
         * Constructs a new act_list_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_list_req);

        /**
         * Creates a new act_list_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_list_req instance
         */
        public static create(properties?: ActMsg.Iact_list_req): ActMsg.act_list_req;

        /**
         * Encodes the specified act_list_req message. Does not implicitly {@link ActMsg.act_list_req.verify|verify} messages.
         * @param message act_list_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_list_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_list_req message, length delimited. Does not implicitly {@link ActMsg.act_list_req.verify|verify} messages.
         * @param message act_list_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_list_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_list_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_list_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_list_req;

        /**
         * Decodes an act_list_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_list_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_list_req;

        /**
         * Verifies an act_list_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_list_resp. */
    interface Iact_list_resp {

        /** act_list_resp info */
        info?: (ActMsg.Iact_info[] | null);
    }

    /** Represents an act_list_resp. */
    class act_list_resp implements Iact_list_resp {

        /**
         * Constructs a new act_list_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_list_resp);

        /** act_list_resp info. */
        public info: ActMsg.Iact_info[];

        /**
         * Creates a new act_list_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_list_resp instance
         */
        public static create(properties?: ActMsg.Iact_list_resp): ActMsg.act_list_resp;

        /**
         * Encodes the specified act_list_resp message. Does not implicitly {@link ActMsg.act_list_resp.verify|verify} messages.
         * @param message act_list_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_list_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_list_resp message, length delimited. Does not implicitly {@link ActMsg.act_list_resp.verify|verify} messages.
         * @param message act_list_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_list_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_list_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_list_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_list_resp;

        /**
         * Decodes an act_list_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_list_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_list_resp;

        /**
         * Verifies an act_list_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_info. */
    interface Iact_info {

        /** act_info uid */
        uid: (number | Long);

        /** act_info type */
        type: number;

        /** act_info pos */
        pos: number;

        /** act_info show_start_time */
        show_start_time: number;

        /** act_info show_end_time */
        show_end_time: number;

        /** act_info start_time */
        start_time: number;

        /** act_info end_time */
        end_time: number;

        /** act_info real_end_time */
        real_end_time?: (number | null);
    }

    /** Represents an act_info. */
    class act_info implements Iact_info {

        /**
         * Constructs a new act_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_info);

        /** act_info uid. */
        public uid: (number | Long);

        /** act_info type. */
        public type: number;

        /** act_info pos. */
        public pos: number;

        /** act_info show_start_time. */
        public show_start_time: number;

        /** act_info show_end_time. */
        public show_end_time: number;

        /** act_info start_time. */
        public start_time: number;

        /** act_info end_time. */
        public end_time: number;

        /** act_info real_end_time. */
        public real_end_time: number;

        /**
         * Creates a new act_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_info instance
         */
        public static create(properties?: ActMsg.Iact_info): ActMsg.act_info;

        /**
         * Encodes the specified act_info message. Does not implicitly {@link ActMsg.act_info.verify|verify} messages.
         * @param message act_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_info message, length delimited. Does not implicitly {@link ActMsg.act_info.verify|verify} messages.
         * @param message act_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_info;

        /**
         * Decodes an act_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_info;

        /**
         * Verifies an act_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_code_resp. */
    interface Iact_code_resp {

        /** act_code_resp code */
        code: ActMsg.act_code;
    }

    /** Represents an act_code_resp. */
    class act_code_resp implements Iact_code_resp {

        /**
         * Constructs a new act_code_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_code_resp);

        /** act_code_resp code. */
        public code: ActMsg.act_code;

        /**
         * Creates a new act_code_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_code_resp instance
         */
        public static create(properties?: ActMsg.Iact_code_resp): ActMsg.act_code_resp;

        /**
         * Encodes the specified act_code_resp message. Does not implicitly {@link ActMsg.act_code_resp.verify|verify} messages.
         * @param message act_code_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_code_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_code_resp message, length delimited. Does not implicitly {@link ActMsg.act_code_resp.verify|verify} messages.
         * @param message act_code_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_code_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_code_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_code_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_code_resp;

        /**
         * Decodes an act_code_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_code_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_code_resp;

        /**
         * Verifies an act_code_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_detail_info_req. */
    interface Iact_detail_info_req {

        /** act_detail_info_req uid */
        uid: (number | Long);
    }

    /** Represents an act_detail_info_req. */
    class act_detail_info_req implements Iact_detail_info_req {

        /**
         * Constructs a new act_detail_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_detail_info_req);

        /** act_detail_info_req uid. */
        public uid: (number | Long);

        /**
         * Creates a new act_detail_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_detail_info_req instance
         */
        public static create(properties?: ActMsg.Iact_detail_info_req): ActMsg.act_detail_info_req;

        /**
         * Encodes the specified act_detail_info_req message. Does not implicitly {@link ActMsg.act_detail_info_req.verify|verify} messages.
         * @param message act_detail_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_detail_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_detail_info_req message, length delimited. Does not implicitly {@link ActMsg.act_detail_info_req.verify|verify} messages.
         * @param message act_detail_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_detail_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_detail_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_detail_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_detail_info_req;

        /**
         * Decodes an act_detail_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_detail_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_detail_info_req;

        /**
         * Verifies an act_detail_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_detail_info_resp. */
    interface Iact_detail_info_resp {

        /** act_detail_info_resp uid */
        uid: (number | Long);

        /** act_detail_info_resp exchange_start_time */
        exchange_start_time: number;

        /** act_detail_info_resp exchange_end_time */
        exchange_end_time: number;

        /** act_detail_info_resp name */
        name: string;

        /** act_detail_info_resp content */
        content: string;

        /** act_detail_info_resp content2 */
        content2: string;

        /** act_detail_info_resp red_bag */
        red_bag?: (ActMsg.Ired_bag_info | null);

        /** act_detail_info_resp world_cup */
        world_cup?: (ActMsg.Iworld_cup_info | null);

        /** act_detail_info_resp nation_day */
        nation_day?: (ActMsg.Ination_day_info | null);

        /** act_detail_info_resp yuandan */
        yuandan?: (ActMsg.Iyuandan_info | null);
    }

    /** Represents an act_detail_info_resp. */
    class act_detail_info_resp implements Iact_detail_info_resp {

        /**
         * Constructs a new act_detail_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iact_detail_info_resp);

        /** act_detail_info_resp uid. */
        public uid: (number | Long);

        /** act_detail_info_resp exchange_start_time. */
        public exchange_start_time: number;

        /** act_detail_info_resp exchange_end_time. */
        public exchange_end_time: number;

        /** act_detail_info_resp name. */
        public name: string;

        /** act_detail_info_resp content. */
        public content: string;

        /** act_detail_info_resp content2. */
        public content2: string;

        /** act_detail_info_resp red_bag. */
        public red_bag?: (ActMsg.Ired_bag_info | null);

        /** act_detail_info_resp world_cup. */
        public world_cup?: (ActMsg.Iworld_cup_info | null);

        /** act_detail_info_resp nation_day. */
        public nation_day?: (ActMsg.Ination_day_info | null);

        /** act_detail_info_resp yuandan. */
        public yuandan?: (ActMsg.Iyuandan_info | null);

        /**
         * Creates a new act_detail_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_detail_info_resp instance
         */
        public static create(properties?: ActMsg.Iact_detail_info_resp): ActMsg.act_detail_info_resp;

        /**
         * Encodes the specified act_detail_info_resp message. Does not implicitly {@link ActMsg.act_detail_info_resp.verify|verify} messages.
         * @param message act_detail_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iact_detail_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_detail_info_resp message, length delimited. Does not implicitly {@link ActMsg.act_detail_info_resp.verify|verify} messages.
         * @param message act_detail_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iact_detail_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_detail_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_detail_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.act_detail_info_resp;

        /**
         * Decodes an act_detail_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_detail_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.act_detail_info_resp;

        /**
         * Verifies an act_detail_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_info_req. */
    interface Ired_bag_exchange_info_req {

        /** red_bag_exchange_info_req uid */
        uid: (number | Long);
    }

    /** Represents a red_bag_exchange_info_req. */
    class red_bag_exchange_info_req implements Ired_bag_exchange_info_req {

        /**
         * Constructs a new red_bag_exchange_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_info_req);

        /** red_bag_exchange_info_req uid. */
        public uid: (number | Long);

        /**
         * Creates a new red_bag_exchange_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_info_req instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_info_req): ActMsg.red_bag_exchange_info_req;

        /**
         * Encodes the specified red_bag_exchange_info_req message. Does not implicitly {@link ActMsg.red_bag_exchange_info_req.verify|verify} messages.
         * @param message red_bag_exchange_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_info_req message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_info_req.verify|verify} messages.
         * @param message red_bag_exchange_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_info_req;

        /**
         * Decodes a red_bag_exchange_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_info_req;

        /**
         * Verifies a red_bag_exchange_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_info_resp. */
    interface Ired_bag_exchange_info_resp {

        /** red_bag_exchange_info_resp uid */
        uid: (number | Long);

        /** red_bag_exchange_info_resp info */
        info: ActMsg.Ired_bag_exchange_info;
    }

    /** Represents a red_bag_exchange_info_resp. */
    class red_bag_exchange_info_resp implements Ired_bag_exchange_info_resp {

        /**
         * Constructs a new red_bag_exchange_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_info_resp);

        /** red_bag_exchange_info_resp uid. */
        public uid: (number | Long);

        /** red_bag_exchange_info_resp info. */
        public info: ActMsg.Ired_bag_exchange_info;

        /**
         * Creates a new red_bag_exchange_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_info_resp instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_info_resp): ActMsg.red_bag_exchange_info_resp;

        /**
         * Encodes the specified red_bag_exchange_info_resp message. Does not implicitly {@link ActMsg.red_bag_exchange_info_resp.verify|verify} messages.
         * @param message red_bag_exchange_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_info_resp message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_info_resp.verify|verify} messages.
         * @param message red_bag_exchange_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_info_resp;

        /**
         * Decodes a red_bag_exchange_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_info_resp;

        /**
         * Verifies a red_bag_exchange_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_req. */
    interface Ired_bag_exchange_req {

        /** red_bag_exchange_req uid */
        uid: (number | Long);

        /** red_bag_exchange_req need */
        need: number;
    }

    /** Represents a red_bag_exchange_req. */
    class red_bag_exchange_req implements Ired_bag_exchange_req {

        /**
         * Constructs a new red_bag_exchange_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_req);

        /** red_bag_exchange_req uid. */
        public uid: (number | Long);

        /** red_bag_exchange_req need. */
        public need: number;

        /**
         * Creates a new red_bag_exchange_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_req instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_req): ActMsg.red_bag_exchange_req;

        /**
         * Encodes the specified red_bag_exchange_req message. Does not implicitly {@link ActMsg.red_bag_exchange_req.verify|verify} messages.
         * @param message red_bag_exchange_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_req message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_req.verify|verify} messages.
         * @param message red_bag_exchange_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_req;

        /**
         * Decodes a red_bag_exchange_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_req;

        /**
         * Verifies a red_bag_exchange_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_resp. */
    interface Ired_bag_exchange_resp {

        /** red_bag_exchange_resp uid */
        uid: (number | Long);

        /** red_bag_exchange_resp chips */
        chips: (number | Long);

        /** red_bag_exchange_resp red_bag */
        red_bag: number;

        /** red_bag_exchange_resp red_bag_exist */
        red_bag_exist: number;

        /** red_bag_exchange_resp record_list */
        record_list?: (ActMsg.Ired_bag_exchange_record[] | null);
    }

    /** Represents a red_bag_exchange_resp. */
    class red_bag_exchange_resp implements Ired_bag_exchange_resp {

        /**
         * Constructs a new red_bag_exchange_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_resp);

        /** red_bag_exchange_resp uid. */
        public uid: (number | Long);

        /** red_bag_exchange_resp chips. */
        public chips: (number | Long);

        /** red_bag_exchange_resp red_bag. */
        public red_bag: number;

        /** red_bag_exchange_resp red_bag_exist. */
        public red_bag_exist: number;

        /** red_bag_exchange_resp record_list. */
        public record_list: ActMsg.Ired_bag_exchange_record[];

        /**
         * Creates a new red_bag_exchange_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_resp instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_resp): ActMsg.red_bag_exchange_resp;

        /**
         * Encodes the specified red_bag_exchange_resp message. Does not implicitly {@link ActMsg.red_bag_exchange_resp.verify|verify} messages.
         * @param message red_bag_exchange_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_resp message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_resp.verify|verify} messages.
         * @param message red_bag_exchange_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_resp;

        /**
         * Decodes a red_bag_exchange_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_resp;

        /**
         * Verifies a red_bag_exchange_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_num_resp. */
    interface Ired_bag_num_resp {

        /** red_bag_num_resp uid */
        uid: (number | Long);

        /** red_bag_num_resp red_bag */
        red_bag: number;

        /** red_bag_num_resp red_bag_exist */
        red_bag_exist: number;
    }

    /** Represents a red_bag_num_resp. */
    class red_bag_num_resp implements Ired_bag_num_resp {

        /**
         * Constructs a new red_bag_num_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_num_resp);

        /** red_bag_num_resp uid. */
        public uid: (number | Long);

        /** red_bag_num_resp red_bag. */
        public red_bag: number;

        /** red_bag_num_resp red_bag_exist. */
        public red_bag_exist: number;

        /**
         * Creates a new red_bag_num_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_num_resp instance
         */
        public static create(properties?: ActMsg.Ired_bag_num_resp): ActMsg.red_bag_num_resp;

        /**
         * Encodes the specified red_bag_num_resp message. Does not implicitly {@link ActMsg.red_bag_num_resp.verify|verify} messages.
         * @param message red_bag_num_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_num_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_num_resp message, length delimited. Does not implicitly {@link ActMsg.red_bag_num_resp.verify|verify} messages.
         * @param message red_bag_num_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_num_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_num_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_num_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_num_resp;

        /**
         * Decodes a red_bag_num_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_num_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_num_resp;

        /**
         * Verifies a red_bag_num_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_add_resp. */
    interface Ired_bag_add_resp {

        /** red_bag_add_resp uid */
        uid: (number | Long);

        /** red_bag_add_resp act_uid */
        act_uid: (number | Long);

        /** red_bag_add_resp red_bag */
        red_bag: number;
    }

    /** Represents a red_bag_add_resp. */
    class red_bag_add_resp implements Ired_bag_add_resp {

        /**
         * Constructs a new red_bag_add_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_add_resp);

        /** red_bag_add_resp uid. */
        public uid: (number | Long);

        /** red_bag_add_resp act_uid. */
        public act_uid: (number | Long);

        /** red_bag_add_resp red_bag. */
        public red_bag: number;

        /**
         * Creates a new red_bag_add_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_add_resp instance
         */
        public static create(properties?: ActMsg.Ired_bag_add_resp): ActMsg.red_bag_add_resp;

        /**
         * Encodes the specified red_bag_add_resp message. Does not implicitly {@link ActMsg.red_bag_add_resp.verify|verify} messages.
         * @param message red_bag_add_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_add_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_add_resp message, length delimited. Does not implicitly {@link ActMsg.red_bag_add_resp.verify|verify} messages.
         * @param message red_bag_add_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_add_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_add_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_add_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_add_resp;

        /**
         * Decodes a red_bag_add_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_add_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_add_resp;

        /**
         * Verifies a red_bag_add_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_info. */
    interface Ired_bag_info {

        /** red_bag_info red_bag */
        red_bag: number;

        /** red_bag_info red_bag_exist */
        red_bag_exist: number;

        /** red_bag_info red_bag_exge_chips */
        red_bag_exge_chips: (number | Long);

        /** red_bag_info rank */
        rank: number;

        /** red_bag_info rank_chips */
        rank_chips: (number | Long);

        /** red_bag_info rank_list */
        rank_list?: (ActMsg.Ired_bag_rank_info[] | null);
    }

    /** Represents a red_bag_info. */
    class red_bag_info implements Ired_bag_info {

        /**
         * Constructs a new red_bag_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_info);

        /** red_bag_info red_bag. */
        public red_bag: number;

        /** red_bag_info red_bag_exist. */
        public red_bag_exist: number;

        /** red_bag_info red_bag_exge_chips. */
        public red_bag_exge_chips: (number | Long);

        /** red_bag_info rank. */
        public rank: number;

        /** red_bag_info rank_chips. */
        public rank_chips: (number | Long);

        /** red_bag_info rank_list. */
        public rank_list: ActMsg.Ired_bag_rank_info[];

        /**
         * Creates a new red_bag_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_info instance
         */
        public static create(properties?: ActMsg.Ired_bag_info): ActMsg.red_bag_info;

        /**
         * Encodes the specified red_bag_info message. Does not implicitly {@link ActMsg.red_bag_info.verify|verify} messages.
         * @param message red_bag_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_info message, length delimited. Does not implicitly {@link ActMsg.red_bag_info.verify|verify} messages.
         * @param message red_bag_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_info;

        /**
         * Decodes a red_bag_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_info;

        /**
         * Verifies a red_bag_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_rank_info. */
    interface Ired_bag_rank_info {

        /** red_bag_rank_info nickname */
        nickname: string;

        /** red_bag_rank_info red_bag */
        red_bag: number;

        /** red_bag_rank_info chips */
        chips: (number | Long);
    }

    /** Represents a red_bag_rank_info. */
    class red_bag_rank_info implements Ired_bag_rank_info {

        /**
         * Constructs a new red_bag_rank_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_rank_info);

        /** red_bag_rank_info nickname. */
        public nickname: string;

        /** red_bag_rank_info red_bag. */
        public red_bag: number;

        /** red_bag_rank_info chips. */
        public chips: (number | Long);

        /**
         * Creates a new red_bag_rank_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_rank_info instance
         */
        public static create(properties?: ActMsg.Ired_bag_rank_info): ActMsg.red_bag_rank_info;

        /**
         * Encodes the specified red_bag_rank_info message. Does not implicitly {@link ActMsg.red_bag_rank_info.verify|verify} messages.
         * @param message red_bag_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_rank_info message, length delimited. Does not implicitly {@link ActMsg.red_bag_rank_info.verify|verify} messages.
         * @param message red_bag_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_rank_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_rank_info;

        /**
         * Decodes a red_bag_rank_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_rank_info;

        /**
         * Verifies a red_bag_rank_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_info. */
    interface Ired_bag_exchange_info {

        /** red_bag_exchange_info red_bag */
        red_bag: number;

        /** red_bag_exchange_info red_bag_exist */
        red_bag_exist: number;

        /** red_bag_exchange_info settings */
        settings?: (ActMsg.Ired_bag_exchange_setting[] | null);

        /** red_bag_exchange_info record_list */
        record_list?: (ActMsg.Ired_bag_exchange_record[] | null);
    }

    /** Represents a red_bag_exchange_info. */
    class red_bag_exchange_info implements Ired_bag_exchange_info {

        /**
         * Constructs a new red_bag_exchange_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_info);

        /** red_bag_exchange_info red_bag. */
        public red_bag: number;

        /** red_bag_exchange_info red_bag_exist. */
        public red_bag_exist: number;

        /** red_bag_exchange_info settings. */
        public settings: ActMsg.Ired_bag_exchange_setting[];

        /** red_bag_exchange_info record_list. */
        public record_list: ActMsg.Ired_bag_exchange_record[];

        /**
         * Creates a new red_bag_exchange_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_info instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_info): ActMsg.red_bag_exchange_info;

        /**
         * Encodes the specified red_bag_exchange_info message. Does not implicitly {@link ActMsg.red_bag_exchange_info.verify|verify} messages.
         * @param message red_bag_exchange_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_info message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_info.verify|verify} messages.
         * @param message red_bag_exchange_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_info;

        /**
         * Decodes a red_bag_exchange_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_info;

        /**
         * Verifies a red_bag_exchange_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_setting. */
    interface Ired_bag_exchange_setting {

        /** red_bag_exchange_setting name */
        name: string;

        /** red_bag_exchange_setting need */
        need: number;

        /** red_bag_exchange_setting min */
        min: number;

        /** red_bag_exchange_setting max */
        max: number;
    }

    /** Represents a red_bag_exchange_setting. */
    class red_bag_exchange_setting implements Ired_bag_exchange_setting {

        /**
         * Constructs a new red_bag_exchange_setting.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_setting);

        /** red_bag_exchange_setting name. */
        public name: string;

        /** red_bag_exchange_setting need. */
        public need: number;

        /** red_bag_exchange_setting min. */
        public min: number;

        /** red_bag_exchange_setting max. */
        public max: number;

        /**
         * Creates a new red_bag_exchange_setting instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_setting instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_setting): ActMsg.red_bag_exchange_setting;

        /**
         * Encodes the specified red_bag_exchange_setting message. Does not implicitly {@link ActMsg.red_bag_exchange_setting.verify|verify} messages.
         * @param message red_bag_exchange_setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_setting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_setting message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_setting.verify|verify} messages.
         * @param message red_bag_exchange_setting message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_setting, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_setting message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_setting;

        /**
         * Decodes a red_bag_exchange_setting message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_setting;

        /**
         * Verifies a red_bag_exchange_setting message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a red_bag_exchange_record. */
    interface Ired_bag_exchange_record {

        /** red_bag_exchange_record nickname */
        nickname?: (string | null);

        /** red_bag_exchange_record red_bag */
        red_bag: number;

        /** red_bag_exchange_record chips */
        chips: (number | Long);

        /** red_bag_exchange_record time */
        time: number;
    }

    /** Represents a red_bag_exchange_record. */
    class red_bag_exchange_record implements Ired_bag_exchange_record {

        /**
         * Constructs a new red_bag_exchange_record.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ired_bag_exchange_record);

        /** red_bag_exchange_record nickname. */
        public nickname: string;

        /** red_bag_exchange_record red_bag. */
        public red_bag: number;

        /** red_bag_exchange_record chips. */
        public chips: (number | Long);

        /** red_bag_exchange_record time. */
        public time: number;

        /**
         * Creates a new red_bag_exchange_record instance using the specified properties.
         * @param [properties] Properties to set
         * @returns red_bag_exchange_record instance
         */
        public static create(properties?: ActMsg.Ired_bag_exchange_record): ActMsg.red_bag_exchange_record;

        /**
         * Encodes the specified red_bag_exchange_record message. Does not implicitly {@link ActMsg.red_bag_exchange_record.verify|verify} messages.
         * @param message red_bag_exchange_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ired_bag_exchange_record, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified red_bag_exchange_record message, length delimited. Does not implicitly {@link ActMsg.red_bag_exchange_record.verify|verify} messages.
         * @param message red_bag_exchange_record message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ired_bag_exchange_record, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a red_bag_exchange_record message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns red_bag_exchange_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.red_bag_exchange_record;

        /**
         * Decodes a red_bag_exchange_record message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns red_bag_exchange_record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.red_bag_exchange_record;

        /**
         * Verifies a red_bag_exchange_record message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_info. */
    interface Iworld_cup_info {

        /** world_cup_info self_rank */
        self_rank: number;

        /** world_cup_info self_score */
        self_score: (number | Long);

        /** world_cup_info rank_list */
        rank_list?: (ActMsg.Iworld_cup_rank_info[] | null);

        /** world_cup_info self_daily_rank */
        self_daily_rank: number;
    }

    /** Represents a world_cup_info. */
    class world_cup_info implements Iworld_cup_info {

        /**
         * Constructs a new world_cup_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_info);

        /** world_cup_info self_rank. */
        public self_rank: number;

        /** world_cup_info self_score. */
        public self_score: (number | Long);

        /** world_cup_info rank_list. */
        public rank_list: ActMsg.Iworld_cup_rank_info[];

        /** world_cup_info self_daily_rank. */
        public self_daily_rank: number;

        /**
         * Creates a new world_cup_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_info instance
         */
        public static create(properties?: ActMsg.Iworld_cup_info): ActMsg.world_cup_info;

        /**
         * Encodes the specified world_cup_info message. Does not implicitly {@link ActMsg.world_cup_info.verify|verify} messages.
         * @param message world_cup_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_info message, length delimited. Does not implicitly {@link ActMsg.world_cup_info.verify|verify} messages.
         * @param message world_cup_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_info;

        /**
         * Decodes a world_cup_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_info;

        /**
         * Verifies a world_cup_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_rank_info. */
    interface Iworld_cup_rank_info {

        /** world_cup_rank_info rank */
        rank: number;

        /** world_cup_rank_info chips */
        chips: (number | Long);

        /** world_cup_rank_info nickname */
        nickname: string;
    }

    /** Represents a world_cup_rank_info. */
    class world_cup_rank_info implements Iworld_cup_rank_info {

        /**
         * Constructs a new world_cup_rank_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_rank_info);

        /** world_cup_rank_info rank. */
        public rank: number;

        /** world_cup_rank_info chips. */
        public chips: (number | Long);

        /** world_cup_rank_info nickname. */
        public nickname: string;

        /**
         * Creates a new world_cup_rank_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_rank_info instance
         */
        public static create(properties?: ActMsg.Iworld_cup_rank_info): ActMsg.world_cup_rank_info;

        /**
         * Encodes the specified world_cup_rank_info message. Does not implicitly {@link ActMsg.world_cup_rank_info.verify|verify} messages.
         * @param message world_cup_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_rank_info message, length delimited. Does not implicitly {@link ActMsg.world_cup_rank_info.verify|verify} messages.
         * @param message world_cup_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_rank_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_rank_info;

        /**
         * Decodes a world_cup_rank_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_rank_info;

        /**
         * Verifies a world_cup_rank_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_reward_info. */
    interface Iworld_cup_reward_info {

        /** world_cup_reward_info rank */
        rank: number;

        /** world_cup_reward_info chips */
        chips: (number | Long);

        /** world_cup_reward_info max_rank */
        max_rank?: (number | null);
    }

    /** Represents a world_cup_reward_info. */
    class world_cup_reward_info implements Iworld_cup_reward_info {

        /**
         * Constructs a new world_cup_reward_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_reward_info);

        /** world_cup_reward_info rank. */
        public rank: number;

        /** world_cup_reward_info chips. */
        public chips: (number | Long);

        /** world_cup_reward_info max_rank. */
        public max_rank: number;

        /**
         * Creates a new world_cup_reward_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_reward_info instance
         */
        public static create(properties?: ActMsg.Iworld_cup_reward_info): ActMsg.world_cup_reward_info;

        /**
         * Encodes the specified world_cup_reward_info message. Does not implicitly {@link ActMsg.world_cup_reward_info.verify|verify} messages.
         * @param message world_cup_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_reward_info message, length delimited. Does not implicitly {@link ActMsg.world_cup_reward_info.verify|verify} messages.
         * @param message world_cup_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_reward_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_reward_info;

        /**
         * Decodes a world_cup_reward_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_reward_info;

        /**
         * Verifies a world_cup_reward_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_rank_reward_req. */
    interface Iworld_cup_rank_reward_req {

        /** world_cup_rank_reward_req act_uid */
        act_uid: (number | Long);
    }

    /** Represents a world_cup_rank_reward_req. */
    class world_cup_rank_reward_req implements Iworld_cup_rank_reward_req {

        /**
         * Constructs a new world_cup_rank_reward_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_rank_reward_req);

        /** world_cup_rank_reward_req act_uid. */
        public act_uid: (number | Long);

        /**
         * Creates a new world_cup_rank_reward_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_rank_reward_req instance
         */
        public static create(properties?: ActMsg.Iworld_cup_rank_reward_req): ActMsg.world_cup_rank_reward_req;

        /**
         * Encodes the specified world_cup_rank_reward_req message. Does not implicitly {@link ActMsg.world_cup_rank_reward_req.verify|verify} messages.
         * @param message world_cup_rank_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_rank_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_rank_reward_req message, length delimited. Does not implicitly {@link ActMsg.world_cup_rank_reward_req.verify|verify} messages.
         * @param message world_cup_rank_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_rank_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_rank_reward_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_rank_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_rank_reward_req;

        /**
         * Decodes a world_cup_rank_reward_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_rank_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_rank_reward_req;

        /**
         * Verifies a world_cup_rank_reward_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_rank_reward_resp. */
    interface Iworld_cup_rank_reward_resp {

        /** world_cup_rank_reward_resp luck_rewards */
        luck_rewards?: (ActMsg.Iworld_cup_reward_info[] | null);

        /** world_cup_rank_reward_resp rewards */
        rewards?: (ActMsg.Iworld_cup_reward_info[] | null);

        /** world_cup_rank_reward_resp daily_rewards */
        daily_rewards?: (ActMsg.Iworld_cup_reward_info[] | null);
    }

    /** Represents a world_cup_rank_reward_resp. */
    class world_cup_rank_reward_resp implements Iworld_cup_rank_reward_resp {

        /**
         * Constructs a new world_cup_rank_reward_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_rank_reward_resp);

        /** world_cup_rank_reward_resp luck_rewards. */
        public luck_rewards: ActMsg.Iworld_cup_reward_info[];

        /** world_cup_rank_reward_resp rewards. */
        public rewards: ActMsg.Iworld_cup_reward_info[];

        /** world_cup_rank_reward_resp daily_rewards. */
        public daily_rewards: ActMsg.Iworld_cup_reward_info[];

        /**
         * Creates a new world_cup_rank_reward_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_rank_reward_resp instance
         */
        public static create(properties?: ActMsg.Iworld_cup_rank_reward_resp): ActMsg.world_cup_rank_reward_resp;

        /**
         * Encodes the specified world_cup_rank_reward_resp message. Does not implicitly {@link ActMsg.world_cup_rank_reward_resp.verify|verify} messages.
         * @param message world_cup_rank_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_rank_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_rank_reward_resp message, length delimited. Does not implicitly {@link ActMsg.world_cup_rank_reward_resp.verify|verify} messages.
         * @param message world_cup_rank_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_rank_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_rank_reward_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_rank_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_rank_reward_resp;

        /**
         * Decodes a world_cup_rank_reward_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_rank_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_rank_reward_resp;

        /**
         * Verifies a world_cup_rank_reward_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_reward_notice_resp. */
    interface Iworld_cup_reward_notice_resp {

        /** world_cup_reward_notice_resp act_uid */
        act_uid: (number | Long);

        /** world_cup_reward_notice_resp reward */
        reward: ActMsg.Iworld_cup_reward_info;

        /** world_cup_reward_notice_resp type */
        type: number;
    }

    /** Represents a world_cup_reward_notice_resp. */
    class world_cup_reward_notice_resp implements Iworld_cup_reward_notice_resp {

        /**
         * Constructs a new world_cup_reward_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_reward_notice_resp);

        /** world_cup_reward_notice_resp act_uid. */
        public act_uid: (number | Long);

        /** world_cup_reward_notice_resp reward. */
        public reward: ActMsg.Iworld_cup_reward_info;

        /** world_cup_reward_notice_resp type. */
        public type: number;

        /**
         * Creates a new world_cup_reward_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_reward_notice_resp instance
         */
        public static create(properties?: ActMsg.Iworld_cup_reward_notice_resp): ActMsg.world_cup_reward_notice_resp;

        /**
         * Encodes the specified world_cup_reward_notice_resp message. Does not implicitly {@link ActMsg.world_cup_reward_notice_resp.verify|verify} messages.
         * @param message world_cup_reward_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_reward_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_reward_notice_resp message, length delimited. Does not implicitly {@link ActMsg.world_cup_reward_notice_resp.verify|verify} messages.
         * @param message world_cup_reward_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_reward_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_reward_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_reward_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_reward_notice_resp;

        /**
         * Decodes a world_cup_reward_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_reward_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_reward_notice_resp;

        /**
         * Verifies a world_cup_reward_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_history_reward_info. */
    interface Iworld_cup_history_reward_info {

        /** world_cup_history_reward_info time */
        time: (number | Long);

        /** world_cup_history_reward_info rank */
        rank: number;

        /** world_cup_history_reward_info chips */
        chips: (number | Long);

        /** world_cup_history_reward_info type */
        type: number;
    }

    /** Represents a world_cup_history_reward_info. */
    class world_cup_history_reward_info implements Iworld_cup_history_reward_info {

        /**
         * Constructs a new world_cup_history_reward_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_history_reward_info);

        /** world_cup_history_reward_info time. */
        public time: (number | Long);

        /** world_cup_history_reward_info rank. */
        public rank: number;

        /** world_cup_history_reward_info chips. */
        public chips: (number | Long);

        /** world_cup_history_reward_info type. */
        public type: number;

        /**
         * Creates a new world_cup_history_reward_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_history_reward_info instance
         */
        public static create(properties?: ActMsg.Iworld_cup_history_reward_info): ActMsg.world_cup_history_reward_info;

        /**
         * Encodes the specified world_cup_history_reward_info message. Does not implicitly {@link ActMsg.world_cup_history_reward_info.verify|verify} messages.
         * @param message world_cup_history_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_history_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_history_reward_info message, length delimited. Does not implicitly {@link ActMsg.world_cup_history_reward_info.verify|verify} messages.
         * @param message world_cup_history_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_history_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_history_reward_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_history_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_history_reward_info;

        /**
         * Decodes a world_cup_history_reward_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_history_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_history_reward_info;

        /**
         * Verifies a world_cup_history_reward_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_role_reward_req. */
    interface Iworld_cup_role_reward_req {

        /** world_cup_role_reward_req act_uid */
        act_uid: (number | Long);
    }

    /** Represents a world_cup_role_reward_req. */
    class world_cup_role_reward_req implements Iworld_cup_role_reward_req {

        /**
         * Constructs a new world_cup_role_reward_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_role_reward_req);

        /** world_cup_role_reward_req act_uid. */
        public act_uid: (number | Long);

        /**
         * Creates a new world_cup_role_reward_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_role_reward_req instance
         */
        public static create(properties?: ActMsg.Iworld_cup_role_reward_req): ActMsg.world_cup_role_reward_req;

        /**
         * Encodes the specified world_cup_role_reward_req message. Does not implicitly {@link ActMsg.world_cup_role_reward_req.verify|verify} messages.
         * @param message world_cup_role_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_role_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_role_reward_req message, length delimited. Does not implicitly {@link ActMsg.world_cup_role_reward_req.verify|verify} messages.
         * @param message world_cup_role_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_role_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_role_reward_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_role_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_role_reward_req;

        /**
         * Decodes a world_cup_role_reward_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_role_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_role_reward_req;

        /**
         * Verifies a world_cup_role_reward_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_role_reward_resp. */
    interface Iworld_cup_role_reward_resp {

        /** world_cup_role_reward_resp rewards */
        rewards?: (ActMsg.Iworld_cup_history_reward_info[] | null);
    }

    /** Represents a world_cup_role_reward_resp. */
    class world_cup_role_reward_resp implements Iworld_cup_role_reward_resp {

        /**
         * Constructs a new world_cup_role_reward_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_role_reward_resp);

        /** world_cup_role_reward_resp rewards. */
        public rewards: ActMsg.Iworld_cup_history_reward_info[];

        /**
         * Creates a new world_cup_role_reward_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_role_reward_resp instance
         */
        public static create(properties?: ActMsg.Iworld_cup_role_reward_resp): ActMsg.world_cup_role_reward_resp;

        /**
         * Encodes the specified world_cup_role_reward_resp message. Does not implicitly {@link ActMsg.world_cup_role_reward_resp.verify|verify} messages.
         * @param message world_cup_role_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_role_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_role_reward_resp message, length delimited. Does not implicitly {@link ActMsg.world_cup_role_reward_resp.verify|verify} messages.
         * @param message world_cup_role_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_role_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_role_reward_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_role_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_role_reward_resp;

        /**
         * Decodes a world_cup_role_reward_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_role_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_role_reward_resp;

        /**
         * Verifies a world_cup_role_reward_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a world_cup_notice_resp. */
    interface Iworld_cup_notice_resp {
    }

    /** Represents a world_cup_notice_resp. */
    class world_cup_notice_resp implements Iworld_cup_notice_resp {

        /**
         * Constructs a new world_cup_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iworld_cup_notice_resp);

        /**
         * Creates a new world_cup_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns world_cup_notice_resp instance
         */
        public static create(properties?: ActMsg.Iworld_cup_notice_resp): ActMsg.world_cup_notice_resp;

        /**
         * Encodes the specified world_cup_notice_resp message. Does not implicitly {@link ActMsg.world_cup_notice_resp.verify|verify} messages.
         * @param message world_cup_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iworld_cup_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified world_cup_notice_resp message, length delimited. Does not implicitly {@link ActMsg.world_cup_notice_resp.verify|verify} messages.
         * @param message world_cup_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iworld_cup_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a world_cup_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns world_cup_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.world_cup_notice_resp;

        /**
         * Decodes a world_cup_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns world_cup_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.world_cup_notice_resp;

        /**
         * Verifies a world_cup_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a valentine_notice_resp. */
    interface Ivalentine_notice_resp {
    }

    /** Represents a valentine_notice_resp. */
    class valentine_notice_resp implements Ivalentine_notice_resp {

        /**
         * Constructs a new valentine_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ivalentine_notice_resp);

        /**
         * Creates a new valentine_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns valentine_notice_resp instance
         */
        public static create(properties?: ActMsg.Ivalentine_notice_resp): ActMsg.valentine_notice_resp;

        /**
         * Encodes the specified valentine_notice_resp message. Does not implicitly {@link ActMsg.valentine_notice_resp.verify|verify} messages.
         * @param message valentine_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ivalentine_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified valentine_notice_resp message, length delimited. Does not implicitly {@link ActMsg.valentine_notice_resp.verify|verify} messages.
         * @param message valentine_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ivalentine_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a valentine_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns valentine_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.valentine_notice_resp;

        /**
         * Decodes a valentine_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns valentine_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.valentine_notice_resp;

        /**
         * Verifies a valentine_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_day_notice_resp. */
    interface Ination_day_notice_resp {

        /** nation_day_notice_resp show_start_time */
        show_start_time: (number | Long);

        /** nation_day_notice_resp show_end_time */
        show_end_time: (number | Long);

        /** nation_day_notice_resp start_time */
        start_time: (number | Long);

        /** nation_day_notice_resp end_time */
        end_time: (number | Long);
    }

    /** Represents a nation_day_notice_resp. */
    class nation_day_notice_resp implements Ination_day_notice_resp {

        /**
         * Constructs a new nation_day_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_day_notice_resp);

        /** nation_day_notice_resp show_start_time. */
        public show_start_time: (number | Long);

        /** nation_day_notice_resp show_end_time. */
        public show_end_time: (number | Long);

        /** nation_day_notice_resp start_time. */
        public start_time: (number | Long);

        /** nation_day_notice_resp end_time. */
        public end_time: (number | Long);

        /**
         * Creates a new nation_day_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_day_notice_resp instance
         */
        public static create(properties?: ActMsg.Ination_day_notice_resp): ActMsg.nation_day_notice_resp;

        /**
         * Encodes the specified nation_day_notice_resp message. Does not implicitly {@link ActMsg.nation_day_notice_resp.verify|verify} messages.
         * @param message nation_day_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_day_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_day_notice_resp message, length delimited. Does not implicitly {@link ActMsg.nation_day_notice_resp.verify|verify} messages.
         * @param message nation_day_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_day_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_day_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_day_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_day_notice_resp;

        /**
         * Decodes a nation_day_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_day_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_day_notice_resp;

        /**
         * Verifies a nation_day_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_volume_add_resp. */
    interface Ination_volume_add_resp {

        /** nation_volume_add_resp uid */
        uid: (number | Long);

        /** nation_volume_add_resp act_uid */
        act_uid: (number | Long);

        /** nation_volume_add_resp add_volume */
        add_volume: (number | Long);

        /** nation_volume_add_resp self_volume */
        self_volume: (number | Long);

        /** nation_volume_add_resp daily_volume */
        daily_volume: (number | Long);
    }

    /** Represents a nation_volume_add_resp. */
    class nation_volume_add_resp implements Ination_volume_add_resp {

        /**
         * Constructs a new nation_volume_add_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_volume_add_resp);

        /** nation_volume_add_resp uid. */
        public uid: (number | Long);

        /** nation_volume_add_resp act_uid. */
        public act_uid: (number | Long);

        /** nation_volume_add_resp add_volume. */
        public add_volume: (number | Long);

        /** nation_volume_add_resp self_volume. */
        public self_volume: (number | Long);

        /** nation_volume_add_resp daily_volume. */
        public daily_volume: (number | Long);

        /**
         * Creates a new nation_volume_add_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_volume_add_resp instance
         */
        public static create(properties?: ActMsg.Ination_volume_add_resp): ActMsg.nation_volume_add_resp;

        /**
         * Encodes the specified nation_volume_add_resp message. Does not implicitly {@link ActMsg.nation_volume_add_resp.verify|verify} messages.
         * @param message nation_volume_add_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_volume_add_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_volume_add_resp message, length delimited. Does not implicitly {@link ActMsg.nation_volume_add_resp.verify|verify} messages.
         * @param message nation_volume_add_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_volume_add_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_volume_add_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_volume_add_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_volume_add_resp;

        /**
         * Decodes a nation_volume_add_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_volume_add_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_volume_add_resp;

        /**
         * Verifies a nation_volume_add_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_day_info. */
    interface Ination_day_info {

        /** nation_day_info self_rank */
        self_rank: number;

        /** nation_day_info self_volume */
        self_volume: (number | Long);

        /** nation_day_info daily_volume */
        daily_volume: (number | Long);

        /** nation_day_info self_daily_rank */
        self_daily_rank: number;
    }

    /** Represents a nation_day_info. */
    class nation_day_info implements Ination_day_info {

        /**
         * Constructs a new nation_day_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_day_info);

        /** nation_day_info self_rank. */
        public self_rank: number;

        /** nation_day_info self_volume. */
        public self_volume: (number | Long);

        /** nation_day_info daily_volume. */
        public daily_volume: (number | Long);

        /** nation_day_info self_daily_rank. */
        public self_daily_rank: number;

        /**
         * Creates a new nation_day_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_day_info instance
         */
        public static create(properties?: ActMsg.Ination_day_info): ActMsg.nation_day_info;

        /**
         * Encodes the specified nation_day_info message. Does not implicitly {@link ActMsg.nation_day_info.verify|verify} messages.
         * @param message nation_day_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_day_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_day_info message, length delimited. Does not implicitly {@link ActMsg.nation_day_info.verify|verify} messages.
         * @param message nation_day_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_day_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_day_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_day_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_day_info;

        /**
         * Decodes a nation_day_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_day_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_day_info;

        /**
         * Verifies a nation_day_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_day_req. */
    interface Ination_race_day_req {

        /** nation_race_day_req uid */
        uid: (number | Long);
    }

    /** Represents a nation_race_day_req. */
    class nation_race_day_req implements Ination_race_day_req {

        /**
         * Constructs a new nation_race_day_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_day_req);

        /** nation_race_day_req uid. */
        public uid: (number | Long);

        /**
         * Creates a new nation_race_day_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_day_req instance
         */
        public static create(properties?: ActMsg.Ination_race_day_req): ActMsg.nation_race_day_req;

        /**
         * Encodes the specified nation_race_day_req message. Does not implicitly {@link ActMsg.nation_race_day_req.verify|verify} messages.
         * @param message nation_race_day_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_day_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_day_req message, length delimited. Does not implicitly {@link ActMsg.nation_race_day_req.verify|verify} messages.
         * @param message nation_race_day_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_day_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_day_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_day_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_day_req;

        /**
         * Decodes a nation_race_day_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_day_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_day_req;

        /**
         * Verifies a nation_race_day_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_day_resp. */
    interface Ination_race_day_resp {

        /** nation_race_day_resp race */
        race?: (ActMsg.Ination_race[] | null);

        /** nation_race_day_resp day */
        day: number;
    }

    /** Represents a nation_race_day_resp. */
    class nation_race_day_resp implements Ination_race_day_resp {

        /**
         * Constructs a new nation_race_day_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_day_resp);

        /** nation_race_day_resp race. */
        public race: ActMsg.Ination_race[];

        /** nation_race_day_resp day. */
        public day: number;

        /**
         * Creates a new nation_race_day_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_day_resp instance
         */
        public static create(properties?: ActMsg.Ination_race_day_resp): ActMsg.nation_race_day_resp;

        /**
         * Encodes the specified nation_race_day_resp message. Does not implicitly {@link ActMsg.nation_race_day_resp.verify|verify} messages.
         * @param message nation_race_day_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_day_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_day_resp message, length delimited. Does not implicitly {@link ActMsg.nation_race_day_resp.verify|verify} messages.
         * @param message nation_race_day_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_day_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_day_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_day_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_day_resp;

        /**
         * Decodes a nation_race_day_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_day_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_day_resp;

        /**
         * Verifies a nation_race_day_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race. */
    interface Ination_race {

        /** nation_race race_id */
        race_id: number;

        /** nation_race show_start_time */
        show_start_time: (number | Long);

        /** nation_race show_end_time */
        show_end_time: (number | Long);

        /** nation_race start_time */
        start_time: (number | Long);

        /** nation_race end_time */
        end_time: (number | Long);

        /** nation_race forbidden_time */
        forbidden_time: (number | Long);

        /** nation_race race_name */
        race_name: string;

        /** nation_race event_type_id */
        event_type_id: number;
    }

    /** Represents a nation_race. */
    class nation_race implements Ination_race {

        /**
         * Constructs a new nation_race.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race);

        /** nation_race race_id. */
        public race_id: number;

        /** nation_race show_start_time. */
        public show_start_time: (number | Long);

        /** nation_race show_end_time. */
        public show_end_time: (number | Long);

        /** nation_race start_time. */
        public start_time: (number | Long);

        /** nation_race end_time. */
        public end_time: (number | Long);

        /** nation_race forbidden_time. */
        public forbidden_time: (number | Long);

        /** nation_race race_name. */
        public race_name: string;

        /** nation_race event_type_id. */
        public event_type_id: number;

        /**
         * Creates a new nation_race instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race instance
         */
        public static create(properties?: ActMsg.Ination_race): ActMsg.nation_race;

        /**
         * Encodes the specified nation_race message. Does not implicitly {@link ActMsg.nation_race.verify|verify} messages.
         * @param message nation_race message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race message, length delimited. Does not implicitly {@link ActMsg.nation_race.verify|verify} messages.
         * @param message nation_race message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race;

        /**
         * Decodes a nation_race message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race;

        /**
         * Verifies a nation_race message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_info_req. */
    interface Ination_race_info_req {

        /** nation_race_info_req uid */
        uid: (number | Long);

        /** nation_race_info_req race_id */
        race_id: number;
    }

    /** Represents a nation_race_info_req. */
    class nation_race_info_req implements Ination_race_info_req {

        /**
         * Constructs a new nation_race_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_info_req);

        /** nation_race_info_req uid. */
        public uid: (number | Long);

        /** nation_race_info_req race_id. */
        public race_id: number;

        /**
         * Creates a new nation_race_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_info_req instance
         */
        public static create(properties?: ActMsg.Ination_race_info_req): ActMsg.nation_race_info_req;

        /**
         * Encodes the specified nation_race_info_req message. Does not implicitly {@link ActMsg.nation_race_info_req.verify|verify} messages.
         * @param message nation_race_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_info_req message, length delimited. Does not implicitly {@link ActMsg.nation_race_info_req.verify|verify} messages.
         * @param message nation_race_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_info_req;

        /**
         * Decodes a nation_race_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_info_req;

        /**
         * Verifies a nation_race_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_info_resp. */
    interface Ination_race_info_resp {

        /** nation_race_info_resp bullet_count */
        bullet_count: number;

        /** nation_race_info_resp entry_fee */
        entry_fee: number;

        /** nation_race_info_resp retry_fee */
        retry_fee: number;

        /** nation_race_info_resp bullet_left */
        bullet_left: number;

        /** nation_race_info_resp rank */
        rank: number;

        /** nation_race_info_resp chances */
        chances: number;

        /** nation_race_info_resp rewards */
        rewards?: (ActMsg.Ination_day_reward_info[] | null);
    }

    /** Represents a nation_race_info_resp. */
    class nation_race_info_resp implements Ination_race_info_resp {

        /**
         * Constructs a new nation_race_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_info_resp);

        /** nation_race_info_resp bullet_count. */
        public bullet_count: number;

        /** nation_race_info_resp entry_fee. */
        public entry_fee: number;

        /** nation_race_info_resp retry_fee. */
        public retry_fee: number;

        /** nation_race_info_resp bullet_left. */
        public bullet_left: number;

        /** nation_race_info_resp rank. */
        public rank: number;

        /** nation_race_info_resp chances. */
        public chances: number;

        /** nation_race_info_resp rewards. */
        public rewards: ActMsg.Ination_day_reward_info[];

        /**
         * Creates a new nation_race_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_info_resp instance
         */
        public static create(properties?: ActMsg.Ination_race_info_resp): ActMsg.nation_race_info_resp;

        /**
         * Encodes the specified nation_race_info_resp message. Does not implicitly {@link ActMsg.nation_race_info_resp.verify|verify} messages.
         * @param message nation_race_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_info_resp message, length delimited. Does not implicitly {@link ActMsg.nation_race_info_resp.verify|verify} messages.
         * @param message nation_race_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_info_resp;

        /**
         * Decodes a nation_race_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_info_resp;

        /**
         * Verifies a nation_race_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_day_reward_info. */
    interface Ination_day_reward_info {

        /** nation_day_reward_info rank */
        rank: number;

        /** nation_day_reward_info chips */
        chips: (number | Long);

        /** nation_day_reward_info max_rank */
        max_rank?: (number | null);
    }

    /** Represents a nation_day_reward_info. */
    class nation_day_reward_info implements Ination_day_reward_info {

        /**
         * Constructs a new nation_day_reward_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_day_reward_info);

        /** nation_day_reward_info rank. */
        public rank: number;

        /** nation_day_reward_info chips. */
        public chips: (number | Long);

        /** nation_day_reward_info max_rank. */
        public max_rank: number;

        /**
         * Creates a new nation_day_reward_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_day_reward_info instance
         */
        public static create(properties?: ActMsg.Ination_day_reward_info): ActMsg.nation_day_reward_info;

        /**
         * Encodes the specified nation_day_reward_info message. Does not implicitly {@link ActMsg.nation_day_reward_info.verify|verify} messages.
         * @param message nation_day_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_day_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_day_reward_info message, length delimited. Does not implicitly {@link ActMsg.nation_day_reward_info.verify|verify} messages.
         * @param message nation_day_reward_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_day_reward_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_day_reward_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_day_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_day_reward_info;

        /**
         * Decodes a nation_day_reward_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_day_reward_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_day_reward_info;

        /**
         * Verifies a nation_day_reward_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_over_req. */
    interface Ination_race_over_req {

        /** nation_race_over_req uid */
        uid: (number | Long);

        /** nation_race_over_req race_id */
        race_id: number;
    }

    /** Represents a nation_race_over_req. */
    class nation_race_over_req implements Ination_race_over_req {

        /**
         * Constructs a new nation_race_over_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_over_req);

        /** nation_race_over_req uid. */
        public uid: (number | Long);

        /** nation_race_over_req race_id. */
        public race_id: number;

        /**
         * Creates a new nation_race_over_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_over_req instance
         */
        public static create(properties?: ActMsg.Ination_race_over_req): ActMsg.nation_race_over_req;

        /**
         * Encodes the specified nation_race_over_req message. Does not implicitly {@link ActMsg.nation_race_over_req.verify|verify} messages.
         * @param message nation_race_over_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_over_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_over_req message, length delimited. Does not implicitly {@link ActMsg.nation_race_over_req.verify|verify} messages.
         * @param message nation_race_over_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_over_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_over_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_over_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_over_req;

        /**
         * Decodes a nation_race_over_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_over_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_over_req;

        /**
         * Verifies a nation_race_over_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_sign_resp. */
    interface Ination_race_sign_resp {

        /** nation_race_sign_resp jettonshow */
        jettonshow: (number | Long);

        /** nation_race_sign_resp bulletleft */
        bulletleft: number;
    }

    /** Represents a nation_race_sign_resp. */
    class nation_race_sign_resp implements Ination_race_sign_resp {

        /**
         * Constructs a new nation_race_sign_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_sign_resp);

        /** nation_race_sign_resp jettonshow. */
        public jettonshow: (number | Long);

        /** nation_race_sign_resp bulletleft. */
        public bulletleft: number;

        /**
         * Creates a new nation_race_sign_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_sign_resp instance
         */
        public static create(properties?: ActMsg.Ination_race_sign_resp): ActMsg.nation_race_sign_resp;

        /**
         * Encodes the specified nation_race_sign_resp message. Does not implicitly {@link ActMsg.nation_race_sign_resp.verify|verify} messages.
         * @param message nation_race_sign_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_sign_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_sign_resp message, length delimited. Does not implicitly {@link ActMsg.nation_race_sign_resp.verify|verify} messages.
         * @param message nation_race_sign_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_sign_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_sign_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_sign_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_sign_resp;

        /**
         * Decodes a nation_race_sign_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_sign_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_sign_resp;

        /**
         * Verifies a nation_race_sign_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_race_over_resp. */
    interface Ination_race_over_resp {

        /** nation_race_over_resp high_point */
        high_point: number;

        /** nation_race_over_resp self_rank */
        self_rank: number;

        /** nation_race_over_resp self_point */
        self_point: number;

        /** nation_race_over_resp game_over */
        game_over: boolean;

        /** nation_race_over_resp retry_fee */
        retry_fee: number;
    }

    /** Represents a nation_race_over_resp. */
    class nation_race_over_resp implements Ination_race_over_resp {

        /**
         * Constructs a new nation_race_over_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_race_over_resp);

        /** nation_race_over_resp high_point. */
        public high_point: number;

        /** nation_race_over_resp self_rank. */
        public self_rank: number;

        /** nation_race_over_resp self_point. */
        public self_point: number;

        /** nation_race_over_resp game_over. */
        public game_over: boolean;

        /** nation_race_over_resp retry_fee. */
        public retry_fee: number;

        /**
         * Creates a new nation_race_over_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_race_over_resp instance
         */
        public static create(properties?: ActMsg.Ination_race_over_resp): ActMsg.nation_race_over_resp;

        /**
         * Encodes the specified nation_race_over_resp message. Does not implicitly {@link ActMsg.nation_race_over_resp.verify|verify} messages.
         * @param message nation_race_over_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_race_over_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_race_over_resp message, length delimited. Does not implicitly {@link ActMsg.nation_race_over_resp.verify|verify} messages.
         * @param message nation_race_over_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_race_over_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_race_over_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_race_over_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_race_over_resp;

        /**
         * Decodes a nation_race_over_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_race_over_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_race_over_resp;

        /**
         * Verifies a nation_race_over_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a nation_day_reward_resp. */
    interface Ination_day_reward_resp {

        /** nation_day_reward_resp uid */
        uid: (number | Long);

        /** nation_day_reward_resp time */
        time: (number | Long);

        /** nation_day_reward_resp rank */
        rank: number;

        /** nation_day_reward_resp chips */
        chips: (number | Long);

        /** nation_day_reward_resp type */
        type: number;

        /** nation_day_reward_resp day */
        day: number;

        /** nation_day_reward_resp race_id */
        race_id?: (number | Long | null);

        /** nation_day_reward_resp start_time */
        start_time?: (number | Long | null);

        /** nation_day_reward_resp race_name */
        race_name?: (string | null);

        /** nation_day_reward_resp event_type_id */
        event_type_id?: (number | null);
    }

    /** Represents a nation_day_reward_resp. */
    class nation_day_reward_resp implements Ination_day_reward_resp {

        /**
         * Constructs a new nation_day_reward_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Ination_day_reward_resp);

        /** nation_day_reward_resp uid. */
        public uid: (number | Long);

        /** nation_day_reward_resp time. */
        public time: (number | Long);

        /** nation_day_reward_resp rank. */
        public rank: number;

        /** nation_day_reward_resp chips. */
        public chips: (number | Long);

        /** nation_day_reward_resp type. */
        public type: number;

        /** nation_day_reward_resp day. */
        public day: number;

        /** nation_day_reward_resp race_id. */
        public race_id: (number | Long);

        /** nation_day_reward_resp start_time. */
        public start_time: (number | Long);

        /** nation_day_reward_resp race_name. */
        public race_name: string;

        /** nation_day_reward_resp event_type_id. */
        public event_type_id: number;

        /**
         * Creates a new nation_day_reward_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns nation_day_reward_resp instance
         */
        public static create(properties?: ActMsg.Ination_day_reward_resp): ActMsg.nation_day_reward_resp;

        /**
         * Encodes the specified nation_day_reward_resp message. Does not implicitly {@link ActMsg.nation_day_reward_resp.verify|verify} messages.
         * @param message nation_day_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Ination_day_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified nation_day_reward_resp message, length delimited. Does not implicitly {@link ActMsg.nation_day_reward_resp.verify|verify} messages.
         * @param message nation_day_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Ination_day_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a nation_day_reward_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns nation_day_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.nation_day_reward_resp;

        /**
         * Decodes a nation_day_reward_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns nation_day_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.nation_day_reward_resp;

        /**
         * Verifies a nation_day_reward_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_info. */
    interface Iyuandan_info {

        /** yuandan_info tasks_conf */
        tasks_conf?: (ActMsg.Iyuandan_task_info[] | null);

        /** yuandan_info rank_conf */
        rank_conf?: (ActMsg.Iyuandan_rank_info[] | null);
    }

    /** Represents a yuandan_info. */
    class yuandan_info implements Iyuandan_info {

        /**
         * Constructs a new yuandan_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_info);

        /** yuandan_info tasks_conf. */
        public tasks_conf: ActMsg.Iyuandan_task_info[];

        /** yuandan_info rank_conf. */
        public rank_conf: ActMsg.Iyuandan_rank_info[];

        /**
         * Creates a new yuandan_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_info instance
         */
        public static create(properties?: ActMsg.Iyuandan_info): ActMsg.yuandan_info;

        /**
         * Encodes the specified yuandan_info message. Does not implicitly {@link ActMsg.yuandan_info.verify|verify} messages.
         * @param message yuandan_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_info message, length delimited. Does not implicitly {@link ActMsg.yuandan_info.verify|verify} messages.
         * @param message yuandan_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_info;

        /**
         * Decodes a yuandan_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_info;

        /**
         * Verifies a yuandan_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_task_info. */
    interface Iyuandan_task_info {

        /** yuandan_task_info task_id */
        task_id: number;

        /** yuandan_task_info need_exp */
        need_exp: (number | Long);

        /** yuandan_task_info award_chips */
        award_chips: (number | Long);

        /** yuandan_task_info award_score */
        award_score: (number | Long);

        /** yuandan_task_info max */
        max: number;
    }

    /** Represents a yuandan_task_info. */
    class yuandan_task_info implements Iyuandan_task_info {

        /**
         * Constructs a new yuandan_task_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_task_info);

        /** yuandan_task_info task_id. */
        public task_id: number;

        /** yuandan_task_info need_exp. */
        public need_exp: (number | Long);

        /** yuandan_task_info award_chips. */
        public award_chips: (number | Long);

        /** yuandan_task_info award_score. */
        public award_score: (number | Long);

        /** yuandan_task_info max. */
        public max: number;

        /**
         * Creates a new yuandan_task_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_task_info instance
         */
        public static create(properties?: ActMsg.Iyuandan_task_info): ActMsg.yuandan_task_info;

        /**
         * Encodes the specified yuandan_task_info message. Does not implicitly {@link ActMsg.yuandan_task_info.verify|verify} messages.
         * @param message yuandan_task_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_task_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_task_info message, length delimited. Does not implicitly {@link ActMsg.yuandan_task_info.verify|verify} messages.
         * @param message yuandan_task_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_task_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_task_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_task_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_task_info;

        /**
         * Decodes a yuandan_task_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_task_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_task_info;

        /**
         * Verifies a yuandan_task_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_rank_info. */
    interface Iyuandan_rank_info {

        /** yuandan_rank_info rank */
        rank: number;

        /** yuandan_rank_info chips */
        chips: (number | Long);

        /** yuandan_rank_info max_rank */
        max_rank?: (number | null);
    }

    /** Represents a yuandan_rank_info. */
    class yuandan_rank_info implements Iyuandan_rank_info {

        /**
         * Constructs a new yuandan_rank_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_rank_info);

        /** yuandan_rank_info rank. */
        public rank: number;

        /** yuandan_rank_info chips. */
        public chips: (number | Long);

        /** yuandan_rank_info max_rank. */
        public max_rank: number;

        /**
         * Creates a new yuandan_rank_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_rank_info instance
         */
        public static create(properties?: ActMsg.Iyuandan_rank_info): ActMsg.yuandan_rank_info;

        /**
         * Encodes the specified yuandan_rank_info message. Does not implicitly {@link ActMsg.yuandan_rank_info.verify|verify} messages.
         * @param message yuandan_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_rank_info message, length delimited. Does not implicitly {@link ActMsg.yuandan_rank_info.verify|verify} messages.
         * @param message yuandan_rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_rank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_rank_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_rank_info;

        /**
         * Decodes a yuandan_rank_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_rank_info;

        /**
         * Verifies a yuandan_rank_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_daily_req. */
    interface Iyuandan_daily_req {

        /** yuandan_daily_req uid */
        uid: (number | Long);
    }

    /** Represents a yuandan_daily_req. */
    class yuandan_daily_req implements Iyuandan_daily_req {

        /**
         * Constructs a new yuandan_daily_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_daily_req);

        /** yuandan_daily_req uid. */
        public uid: (number | Long);

        /**
         * Creates a new yuandan_daily_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_daily_req instance
         */
        public static create(properties?: ActMsg.Iyuandan_daily_req): ActMsg.yuandan_daily_req;

        /**
         * Encodes the specified yuandan_daily_req message. Does not implicitly {@link ActMsg.yuandan_daily_req.verify|verify} messages.
         * @param message yuandan_daily_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_daily_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_daily_req message, length delimited. Does not implicitly {@link ActMsg.yuandan_daily_req.verify|verify} messages.
         * @param message yuandan_daily_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_daily_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_daily_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_daily_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_daily_req;

        /**
         * Decodes a yuandan_daily_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_daily_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_daily_req;

        /**
         * Verifies a yuandan_daily_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_daily_resp. */
    interface Iyuandan_daily_resp {

        /** yuandan_daily_resp uid */
        uid: (number | Long);

        /** yuandan_daily_resp exp */
        exp: (number | Long);

        /** yuandan_daily_resp tasks */
        tasks?: (ActMsg.Iyuandan_role_task_info[] | null);
    }

    /** Represents a yuandan_daily_resp. */
    class yuandan_daily_resp implements Iyuandan_daily_resp {

        /**
         * Constructs a new yuandan_daily_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_daily_resp);

        /** yuandan_daily_resp uid. */
        public uid: (number | Long);

        /** yuandan_daily_resp exp. */
        public exp: (number | Long);

        /** yuandan_daily_resp tasks. */
        public tasks: ActMsg.Iyuandan_role_task_info[];

        /**
         * Creates a new yuandan_daily_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_daily_resp instance
         */
        public static create(properties?: ActMsg.Iyuandan_daily_resp): ActMsg.yuandan_daily_resp;

        /**
         * Encodes the specified yuandan_daily_resp message. Does not implicitly {@link ActMsg.yuandan_daily_resp.verify|verify} messages.
         * @param message yuandan_daily_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_daily_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_daily_resp message, length delimited. Does not implicitly {@link ActMsg.yuandan_daily_resp.verify|verify} messages.
         * @param message yuandan_daily_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_daily_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_daily_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_daily_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_daily_resp;

        /**
         * Decodes a yuandan_daily_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_daily_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_daily_resp;

        /**
         * Verifies a yuandan_daily_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_role_task_info. */
    interface Iyuandan_role_task_info {

        /** yuandan_role_task_info task_id */
        task_id: number;

        /** yuandan_role_task_info num */
        num: number;

        /** yuandan_role_task_info award_state */
        award_state: number;
    }

    /** Represents a yuandan_role_task_info. */
    class yuandan_role_task_info implements Iyuandan_role_task_info {

        /**
         * Constructs a new yuandan_role_task_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_role_task_info);

        /** yuandan_role_task_info task_id. */
        public task_id: number;

        /** yuandan_role_task_info num. */
        public num: number;

        /** yuandan_role_task_info award_state. */
        public award_state: number;

        /**
         * Creates a new yuandan_role_task_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_role_task_info instance
         */
        public static create(properties?: ActMsg.Iyuandan_role_task_info): ActMsg.yuandan_role_task_info;

        /**
         * Encodes the specified yuandan_role_task_info message. Does not implicitly {@link ActMsg.yuandan_role_task_info.verify|verify} messages.
         * @param message yuandan_role_task_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_role_task_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_role_task_info message, length delimited. Does not implicitly {@link ActMsg.yuandan_role_task_info.verify|verify} messages.
         * @param message yuandan_role_task_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_role_task_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_role_task_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_role_task_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_role_task_info;

        /**
         * Decodes a yuandan_role_task_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_role_task_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_role_task_info;

        /**
         * Verifies a yuandan_role_task_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_daily_reward_req. */
    interface Iyuandan_daily_reward_req {

        /** yuandan_daily_reward_req uid */
        uid: (number | Long);

        /** yuandan_daily_reward_req task_id */
        task_id: number;
    }

    /** Represents a yuandan_daily_reward_req. */
    class yuandan_daily_reward_req implements Iyuandan_daily_reward_req {

        /**
         * Constructs a new yuandan_daily_reward_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_daily_reward_req);

        /** yuandan_daily_reward_req uid. */
        public uid: (number | Long);

        /** yuandan_daily_reward_req task_id. */
        public task_id: number;

        /**
         * Creates a new yuandan_daily_reward_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_daily_reward_req instance
         */
        public static create(properties?: ActMsg.Iyuandan_daily_reward_req): ActMsg.yuandan_daily_reward_req;

        /**
         * Encodes the specified yuandan_daily_reward_req message. Does not implicitly {@link ActMsg.yuandan_daily_reward_req.verify|verify} messages.
         * @param message yuandan_daily_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_daily_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_daily_reward_req message, length delimited. Does not implicitly {@link ActMsg.yuandan_daily_reward_req.verify|verify} messages.
         * @param message yuandan_daily_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_daily_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_daily_reward_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_daily_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_daily_reward_req;

        /**
         * Decodes a yuandan_daily_reward_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_daily_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_daily_reward_req;

        /**
         * Verifies a yuandan_daily_reward_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_daily_reward_resp. */
    interface Iyuandan_daily_reward_resp {

        /** yuandan_daily_reward_resp uid */
        uid: (number | Long);

        /** yuandan_daily_reward_resp task_id */
        task_id: number;

        /** yuandan_daily_reward_resp code */
        code: number;
    }

    /** Represents a yuandan_daily_reward_resp. */
    class yuandan_daily_reward_resp implements Iyuandan_daily_reward_resp {

        /**
         * Constructs a new yuandan_daily_reward_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_daily_reward_resp);

        /** yuandan_daily_reward_resp uid. */
        public uid: (number | Long);

        /** yuandan_daily_reward_resp task_id. */
        public task_id: number;

        /** yuandan_daily_reward_resp code. */
        public code: number;

        /**
         * Creates a new yuandan_daily_reward_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_daily_reward_resp instance
         */
        public static create(properties?: ActMsg.Iyuandan_daily_reward_resp): ActMsg.yuandan_daily_reward_resp;

        /**
         * Encodes the specified yuandan_daily_reward_resp message. Does not implicitly {@link ActMsg.yuandan_daily_reward_resp.verify|verify} messages.
         * @param message yuandan_daily_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_daily_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_daily_reward_resp message, length delimited. Does not implicitly {@link ActMsg.yuandan_daily_reward_resp.verify|verify} messages.
         * @param message yuandan_daily_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_daily_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_daily_reward_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_daily_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_daily_reward_resp;

        /**
         * Decodes a yuandan_daily_reward_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_daily_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_daily_reward_resp;

        /**
         * Verifies a yuandan_daily_reward_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_notice_resp. */
    interface Iyuandan_notice_resp {
    }

    /** Represents a yuandan_notice_resp. */
    class yuandan_notice_resp implements Iyuandan_notice_resp {

        /**
         * Constructs a new yuandan_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_notice_resp);

        /**
         * Creates a new yuandan_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_notice_resp instance
         */
        public static create(properties?: ActMsg.Iyuandan_notice_resp): ActMsg.yuandan_notice_resp;

        /**
         * Encodes the specified yuandan_notice_resp message. Does not implicitly {@link ActMsg.yuandan_notice_resp.verify|verify} messages.
         * @param message yuandan_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_notice_resp message, length delimited. Does not implicitly {@link ActMsg.yuandan_notice_resp.verify|verify} messages.
         * @param message yuandan_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_notice_resp;

        /**
         * Decodes a yuandan_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_notice_resp;

        /**
         * Verifies a yuandan_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a yuandan_reward_notice_resp. */
    interface Iyuandan_reward_notice_resp {

        /** yuandan_reward_notice_resp act_uid */
        act_uid: (number | Long);

        /** yuandan_reward_notice_resp type */
        type: number;

        /** yuandan_reward_notice_resp chips */
        chips: (number | Long);

        /** yuandan_reward_notice_resp rank */
        rank?: (number | null);
    }

    /** Represents a yuandan_reward_notice_resp. */
    class yuandan_reward_notice_resp implements Iyuandan_reward_notice_resp {

        /**
         * Constructs a new yuandan_reward_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Iyuandan_reward_notice_resp);

        /** yuandan_reward_notice_resp act_uid. */
        public act_uid: (number | Long);

        /** yuandan_reward_notice_resp type. */
        public type: number;

        /** yuandan_reward_notice_resp chips. */
        public chips: (number | Long);

        /** yuandan_reward_notice_resp rank. */
        public rank: number;

        /**
         * Creates a new yuandan_reward_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns yuandan_reward_notice_resp instance
         */
        public static create(properties?: ActMsg.Iyuandan_reward_notice_resp): ActMsg.yuandan_reward_notice_resp;

        /**
         * Encodes the specified yuandan_reward_notice_resp message. Does not implicitly {@link ActMsg.yuandan_reward_notice_resp.verify|verify} messages.
         * @param message yuandan_reward_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Iyuandan_reward_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified yuandan_reward_notice_resp message, length delimited. Does not implicitly {@link ActMsg.yuandan_reward_notice_resp.verify|verify} messages.
         * @param message yuandan_reward_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Iyuandan_reward_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a yuandan_reward_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns yuandan_reward_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.yuandan_reward_notice_resp;

        /**
         * Decodes a yuandan_reward_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns yuandan_reward_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.yuandan_reward_notice_resp;

        /**
         * Verifies a yuandan_reward_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a top_12_notice_resp. */
    interface Itop_12_notice_resp {

        /** top_12_notice_resp content */
        content: string;
    }

    /** Represents a top_12_notice_resp. */
    class top_12_notice_resp implements Itop_12_notice_resp {

        /**
         * Constructs a new top_12_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActMsg.Itop_12_notice_resp);

        /** top_12_notice_resp content. */
        public content: string;

        /**
         * Creates a new top_12_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns top_12_notice_resp instance
         */
        public static create(properties?: ActMsg.Itop_12_notice_resp): ActMsg.top_12_notice_resp;

        /**
         * Encodes the specified top_12_notice_resp message. Does not implicitly {@link ActMsg.top_12_notice_resp.verify|verify} messages.
         * @param message top_12_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActMsg.Itop_12_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified top_12_notice_resp message, length delimited. Does not implicitly {@link ActMsg.top_12_notice_resp.verify|verify} messages.
         * @param message top_12_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActMsg.Itop_12_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a top_12_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns top_12_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ActMsg.top_12_notice_resp;

        /**
         * Decodes a top_12_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns top_12_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ActMsg.top_12_notice_resp;

        /**
         * Verifies a top_12_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace CommonMsg. */
declare namespace CommonMsg {

    /** Properties of an undefined. */
    interface Iundefined {
    }

    /** Represents an undefined. */
    class undefined implements Iundefined {

        /**
         * Constructs a new undefined.
         * @param [properties] Properties to set
         */
        constructor(properties?: CommonMsg.Iundefined);

        /**
         * Creates a new undefined instance using the specified properties.
         * @param [properties] Properties to set
         * @returns undefined instance
         */
        public static create(properties?: CommonMsg.Iundefined): CommonMsg.undefined;

        /**
         * Encodes the specified undefined message. Does not implicitly {@link CommonMsg.undefined.verify|verify} messages.
         * @param message undefined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CommonMsg.Iundefined, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified undefined message, length delimited. Does not implicitly {@link CommonMsg.undefined.verify|verify} messages.
         * @param message undefined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CommonMsg.Iundefined, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an undefined message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns undefined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): CommonMsg.undefined;

        /**
         * Decodes an undefined message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns undefined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): CommonMsg.undefined;

        /**
         * Verifies an undefined message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** room_type enum. */
    enum room_type {
        room_auto = 0,
        room_normal = 1,
        room_middle = 2,
        room_senior = 3,
        room_superfine = 4,
        room_godly = 5,
        room_race = 100,
        room_nation_race = 101
    }

    /** Properties of a dmsg_content. */
    interface Idmsg_content {

        /** dmsg_content msg_type */
        msg_type: string;

        /** dmsg_content chars */
        chars?: (string | null);

        /** dmsg_content number */
        number?: (number | Long | null);

        /** dmsg_content id */
        id?: (number | null);
    }

    /** Represents a dmsg_content. */
    class dmsg_content implements Idmsg_content {

        /**
         * Constructs a new dmsg_content.
         * @param [properties] Properties to set
         */
        constructor(properties?: CommonMsg.Idmsg_content);

        /** dmsg_content msg_type. */
        public msg_type: string;

        /** dmsg_content chars. */
        public chars: string;

        /** dmsg_content number. */
        public number: (number | Long);

        /** dmsg_content id. */
        public id: number;

        /**
         * Creates a new dmsg_content instance using the specified properties.
         * @param [properties] Properties to set
         * @returns dmsg_content instance
         */
        public static create(properties?: CommonMsg.Idmsg_content): CommonMsg.dmsg_content;

        /**
         * Encodes the specified dmsg_content message. Does not implicitly {@link CommonMsg.dmsg_content.verify|verify} messages.
         * @param message dmsg_content message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CommonMsg.Idmsg_content, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified dmsg_content message, length delimited. Does not implicitly {@link CommonMsg.dmsg_content.verify|verify} messages.
         * @param message dmsg_content message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CommonMsg.Idmsg_content, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a dmsg_content message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns dmsg_content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): CommonMsg.dmsg_content;

        /**
         * Decodes a dmsg_content message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns dmsg_content
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): CommonMsg.dmsg_content;

        /**
         * Verifies a dmsg_content message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a dmsg. */
    interface Idmsg {

        /** dmsg id */
        id: number;

        /** dmsg content */
        content?: (CommonMsg.Idmsg_content[] | null);
    }

    /** Represents a dmsg. */
    class dmsg implements Idmsg {

        /**
         * Constructs a new dmsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: CommonMsg.Idmsg);

        /** dmsg id. */
        public id: number;

        /** dmsg content. */
        public content: CommonMsg.Idmsg_content[];

        /**
         * Creates a new dmsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns dmsg instance
         */
        public static create(properties?: CommonMsg.Idmsg): CommonMsg.dmsg;

        /**
         * Encodes the specified dmsg message. Does not implicitly {@link CommonMsg.dmsg.verify|verify} messages.
         * @param message dmsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CommonMsg.Idmsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified dmsg message, length delimited. Does not implicitly {@link CommonMsg.dmsg.verify|verify} messages.
         * @param message dmsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CommonMsg.Idmsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a dmsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns dmsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): CommonMsg.dmsg;

        /**
         * Decodes a dmsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns dmsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): CommonMsg.dmsg;

        /**
         * Verifies a dmsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace AwardMsg. */
declare namespace AwardMsg {

    /** c_cmd enum. */
    enum c_cmd {
        growth_fund_info_req = 0,
        growth_fund_info_resp = 1,
        growth_fund_config_req = 2,
        growth_fund_config_resp = 3,
        growth_fund_buy_req = 4,
        growth_fund_buy_resp = 5,
        lv_award_req = 6,
        lv_award_resp = 7,
        lv_award_notice_resp = 8,
        lv_award_notice_set_req = 9,
        growth_fund_state_req = 10,
        growth_fund_state_resp = 11,
        lv_award_state_req = 12,
        lv_award_state_resp = 13
    }

    /** Represents a msg_award_service */
    class msg_award_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_award_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_award_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_award_service;

        /**
         * Calls growth_fund_info.
         * @param request growth_fund_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and growth_fund_info_resp
         */
        public growth_fund_info(request: AwardMsg.Igrowth_fund_info_req, callback: AwardMsg.msg_award_service.growth_fund_infoCallback): void;

        /**
         * Calls growth_fund_info.
         * @param request growth_fund_info_req message or plain object
         * @returns Promise
         */
        public growth_fund_info(request: AwardMsg.Igrowth_fund_info_req): Promise<AwardMsg.growth_fund_info_resp>;

        /**
         * Calls growth_fund_configs.
         * @param request growth_fund_config_req message or plain object
         * @param callback Node-style callback called with the error, if any, and growth_fund_config_resp
         */
        public growth_fund_configs(request: AwardMsg.Igrowth_fund_config_req, callback: AwardMsg.msg_award_service.growth_fund_configsCallback): void;

        /**
         * Calls growth_fund_configs.
         * @param request growth_fund_config_req message or plain object
         * @returns Promise
         */
        public growth_fund_configs(request: AwardMsg.Igrowth_fund_config_req): Promise<AwardMsg.growth_fund_config_resp>;

        /**
         * Calls growth_fund_buy.
         * @param request growth_fund_buy_req message or plain object
         * @param callback Node-style callback called with the error, if any, and growth_fund_buy_resp
         */
        public growth_fund_buy(request: AwardMsg.Igrowth_fund_buy_req, callback: AwardMsg.msg_award_service.growth_fund_buyCallback): void;

        /**
         * Calls growth_fund_buy.
         * @param request growth_fund_buy_req message or plain object
         * @returns Promise
         */
        public growth_fund_buy(request: AwardMsg.Igrowth_fund_buy_req): Promise<AwardMsg.growth_fund_buy_resp>;

        /**
         * Calls lv_award.
         * @param request lv_award_req message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_award_resp
         */
        public lv_award(request: AwardMsg.Ilv_award_req, callback: AwardMsg.msg_award_service.lv_awardCallback): void;

        /**
         * Calls lv_award.
         * @param request lv_award_req message or plain object
         * @returns Promise
         */
        public lv_award(request: AwardMsg.Ilv_award_req): Promise<AwardMsg.lv_award_resp>;

        /**
         * Calls lv_award_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_award_notice_resp
         */
        public lv_award_notice(request: CommonMsg.Iundefined, callback: AwardMsg.msg_award_service.lv_award_noticeCallback): void;

        /**
         * Calls lv_award_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public lv_award_notice(request: CommonMsg.Iundefined): Promise<AwardMsg.lv_award_notice_resp>;

        /**
         * Calls lv_award_notice_set.
         * @param request lv_award_notice_set_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public lv_award_notice_set(request: AwardMsg.Ilv_award_notice_set_req, callback: AwardMsg.msg_award_service.lv_award_notice_setCallback): void;

        /**
         * Calls lv_award_notice_set.
         * @param request lv_award_notice_set_req message or plain object
         * @returns Promise
         */
        public lv_award_notice_set(request: AwardMsg.Ilv_award_notice_set_req): Promise<CommonMsg.undefined>;

        /**
         * Calls growth_fund_state.
         * @param request growth_fund_state_req message or plain object
         * @param callback Node-style callback called with the error, if any, and growth_fund_state_resp
         */
        public growth_fund_state(request: AwardMsg.Igrowth_fund_state_req, callback: AwardMsg.msg_award_service.growth_fund_stateCallback): void;

        /**
         * Calls growth_fund_state.
         * @param request growth_fund_state_req message or plain object
         * @returns Promise
         */
        public growth_fund_state(request: AwardMsg.Igrowth_fund_state_req): Promise<AwardMsg.growth_fund_state_resp>;

        /**
         * Calls lv_award_state.
         * @param request lv_award_state_req message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_award_state_resp
         */
        public lv_award_state(request: AwardMsg.Ilv_award_state_req, callback: AwardMsg.msg_award_service.lv_award_stateCallback): void;

        /**
         * Calls lv_award_state.
         * @param request lv_award_state_req message or plain object
         * @returns Promise
         */
        public lv_award_state(request: AwardMsg.Ilv_award_state_req): Promise<AwardMsg.lv_award_state_resp>;
    }

    namespace msg_award_service {

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#growth_fund_info}.
         * @param error Error, if any
         * @param [response] growth_fund_info_resp
         */
        type growth_fund_infoCallback = (error: (Error | null), response?: AwardMsg.growth_fund_info_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#growth_fund_configs}.
         * @param error Error, if any
         * @param [response] growth_fund_config_resp
         */
        type growth_fund_configsCallback = (error: (Error | null), response?: AwardMsg.growth_fund_config_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#growth_fund_buy}.
         * @param error Error, if any
         * @param [response] growth_fund_buy_resp
         */
        type growth_fund_buyCallback = (error: (Error | null), response?: AwardMsg.growth_fund_buy_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#lv_award}.
         * @param error Error, if any
         * @param [response] lv_award_resp
         */
        type lv_awardCallback = (error: (Error | null), response?: AwardMsg.lv_award_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#lv_award_notice}.
         * @param error Error, if any
         * @param [response] lv_award_notice_resp
         */
        type lv_award_noticeCallback = (error: (Error | null), response?: AwardMsg.lv_award_notice_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#lv_award_notice_set}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type lv_award_notice_setCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#growth_fund_state}.
         * @param error Error, if any
         * @param [response] growth_fund_state_resp
         */
        type growth_fund_stateCallback = (error: (Error | null), response?: AwardMsg.growth_fund_state_resp) => void;

        /**
         * Callback as used by {@link AwardMsg.msg_award_service#lv_award_state}.
         * @param error Error, if any
         * @param [response] lv_award_state_resp
         */
        type lv_award_stateCallback = (error: (Error | null), response?: AwardMsg.lv_award_state_resp) => void;
    }

    /** award_code enum. */
    enum award_code {
        success = 0,
        fail = 1,
        out_of_cash = 2,
        top_fun_id = 3,
        lv_had_reward = 4,
        levelnot = 5,
        prev_reward = 6,
        had_bought = 7,
        act_end = 8
    }

    /** Properties of a growth_fund_info_req. */
    interface Igrowth_fund_info_req {
    }

    /** Represents a growth_fund_info_req. */
    class growth_fund_info_req implements Igrowth_fund_info_req {

        /**
         * Constructs a new growth_fund_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_info_req);

        /**
         * Creates a new growth_fund_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_info_req instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_info_req): AwardMsg.growth_fund_info_req;

        /**
         * Encodes the specified growth_fund_info_req message. Does not implicitly {@link AwardMsg.growth_fund_info_req.verify|verify} messages.
         * @param message growth_fund_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_info_req message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_info_req.verify|verify} messages.
         * @param message growth_fund_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_info_req;

        /**
         * Decodes a growth_fund_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_info_req;

        /**
         * Verifies a growth_fund_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_info_resp. */
    interface Igrowth_fund_info_resp {

        /** growth_fund_info_resp fund_id */
        fund_id: number;
    }

    /** Represents a growth_fund_info_resp. */
    class growth_fund_info_resp implements Igrowth_fund_info_resp {

        /**
         * Constructs a new growth_fund_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_info_resp);

        /** growth_fund_info_resp fund_id. */
        public fund_id: number;

        /**
         * Creates a new growth_fund_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_info_resp instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_info_resp): AwardMsg.growth_fund_info_resp;

        /**
         * Encodes the specified growth_fund_info_resp message. Does not implicitly {@link AwardMsg.growth_fund_info_resp.verify|verify} messages.
         * @param message growth_fund_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_info_resp message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_info_resp.verify|verify} messages.
         * @param message growth_fund_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_info_resp;

        /**
         * Decodes a growth_fund_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_info_resp;

        /**
         * Verifies a growth_fund_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_config_req. */
    interface Igrowth_fund_config_req {
    }

    /** Represents a growth_fund_config_req. */
    class growth_fund_config_req implements Igrowth_fund_config_req {

        /**
         * Constructs a new growth_fund_config_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_config_req);

        /**
         * Creates a new growth_fund_config_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_config_req instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_config_req): AwardMsg.growth_fund_config_req;

        /**
         * Encodes the specified growth_fund_config_req message. Does not implicitly {@link AwardMsg.growth_fund_config_req.verify|verify} messages.
         * @param message growth_fund_config_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_config_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_config_req message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_config_req.verify|verify} messages.
         * @param message growth_fund_config_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_config_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_config_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_config_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_config_req;

        /**
         * Decodes a growth_fund_config_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_config_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_config_req;

        /**
         * Verifies a growth_fund_config_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_config_resp. */
    interface Igrowth_fund_config_resp {

        /** growth_fund_config_resp configs */
        configs?: (AwardMsg.Igrowth_fund_config[] | null);
    }

    /** Represents a growth_fund_config_resp. */
    class growth_fund_config_resp implements Igrowth_fund_config_resp {

        /**
         * Constructs a new growth_fund_config_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_config_resp);

        /** growth_fund_config_resp configs. */
        public configs: AwardMsg.Igrowth_fund_config[];

        /**
         * Creates a new growth_fund_config_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_config_resp instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_config_resp): AwardMsg.growth_fund_config_resp;

        /**
         * Encodes the specified growth_fund_config_resp message. Does not implicitly {@link AwardMsg.growth_fund_config_resp.verify|verify} messages.
         * @param message growth_fund_config_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_config_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_config_resp message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_config_resp.verify|verify} messages.
         * @param message growth_fund_config_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_config_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_config_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_config_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_config_resp;

        /**
         * Decodes a growth_fund_config_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_config_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_config_resp;

        /**
         * Verifies a growth_fund_config_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_config. */
    interface Igrowth_fund_config {

        /** growth_fund_config fund_id */
        fund_id: number;

        /** growth_fund_config price */
        price: (number | Long);

        /** growth_fund_config rebate */
        rebate: (number | Long);

        /** growth_fund_config rebate_per */
        rebate_per: number;

        /** growth_fund_config des */
        des: string;
    }

    /** Represents a growth_fund_config. */
    class growth_fund_config implements Igrowth_fund_config {

        /**
         * Constructs a new growth_fund_config.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_config);

        /** growth_fund_config fund_id. */
        public fund_id: number;

        /** growth_fund_config price. */
        public price: (number | Long);

        /** growth_fund_config rebate. */
        public rebate: (number | Long);

        /** growth_fund_config rebate_per. */
        public rebate_per: number;

        /** growth_fund_config des. */
        public des: string;

        /**
         * Creates a new growth_fund_config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_config instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_config): AwardMsg.growth_fund_config;

        /**
         * Encodes the specified growth_fund_config message. Does not implicitly {@link AwardMsg.growth_fund_config.verify|verify} messages.
         * @param message growth_fund_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_config message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_config.verify|verify} messages.
         * @param message growth_fund_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_config;

        /**
         * Decodes a growth_fund_config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_config;

        /**
         * Verifies a growth_fund_config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_buy_req. */
    interface Igrowth_fund_buy_req {

        /** growth_fund_buy_req fund_id */
        fund_id: number;
    }

    /** Represents a growth_fund_buy_req. */
    class growth_fund_buy_req implements Igrowth_fund_buy_req {

        /**
         * Constructs a new growth_fund_buy_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_buy_req);

        /** growth_fund_buy_req fund_id. */
        public fund_id: number;

        /**
         * Creates a new growth_fund_buy_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_buy_req instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_buy_req): AwardMsg.growth_fund_buy_req;

        /**
         * Encodes the specified growth_fund_buy_req message. Does not implicitly {@link AwardMsg.growth_fund_buy_req.verify|verify} messages.
         * @param message growth_fund_buy_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_buy_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_buy_req message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_buy_req.verify|verify} messages.
         * @param message growth_fund_buy_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_buy_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_buy_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_buy_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_buy_req;

        /**
         * Decodes a growth_fund_buy_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_buy_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_buy_req;

        /**
         * Verifies a growth_fund_buy_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_buy_resp. */
    interface Igrowth_fund_buy_resp {

        /** growth_fund_buy_resp code */
        code: AwardMsg.award_code;

        /** growth_fund_buy_resp fund_id */
        fund_id: number;
    }

    /** Represents a growth_fund_buy_resp. */
    class growth_fund_buy_resp implements Igrowth_fund_buy_resp {

        /**
         * Constructs a new growth_fund_buy_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_buy_resp);

        /** growth_fund_buy_resp code. */
        public code: AwardMsg.award_code;

        /** growth_fund_buy_resp fund_id. */
        public fund_id: number;

        /**
         * Creates a new growth_fund_buy_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_buy_resp instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_buy_resp): AwardMsg.growth_fund_buy_resp;

        /**
         * Encodes the specified growth_fund_buy_resp message. Does not implicitly {@link AwardMsg.growth_fund_buy_resp.verify|verify} messages.
         * @param message growth_fund_buy_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_buy_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_buy_resp message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_buy_resp.verify|verify} messages.
         * @param message growth_fund_buy_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_buy_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_buy_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_buy_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_buy_resp;

        /**
         * Decodes a growth_fund_buy_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_buy_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_buy_resp;

        /**
         * Verifies a growth_fund_buy_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_req. */
    interface Ilv_award_req {

        /** lv_award_req lv */
        lv: number;
    }

    /** Represents a lv_award_req. */
    class lv_award_req implements Ilv_award_req {

        /**
         * Constructs a new lv_award_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_req);

        /** lv_award_req lv. */
        public lv: number;

        /**
         * Creates a new lv_award_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_req instance
         */
        public static create(properties?: AwardMsg.Ilv_award_req): AwardMsg.lv_award_req;

        /**
         * Encodes the specified lv_award_req message. Does not implicitly {@link AwardMsg.lv_award_req.verify|verify} messages.
         * @param message lv_award_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_req message, length delimited. Does not implicitly {@link AwardMsg.lv_award_req.verify|verify} messages.
         * @param message lv_award_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_req;

        /**
         * Decodes a lv_award_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_req;

        /**
         * Verifies a lv_award_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_resp. */
    interface Ilv_award_resp {

        /** lv_award_resp code */
        code: AwardMsg.award_code;

        /** lv_award_resp lv */
        lv: number;

        /** lv_award_resp next_lv */
        next_lv: number;

        /** lv_award_resp reward */
        reward: (number | Long);
    }

    /** Represents a lv_award_resp. */
    class lv_award_resp implements Ilv_award_resp {

        /**
         * Constructs a new lv_award_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_resp);

        /** lv_award_resp code. */
        public code: AwardMsg.award_code;

        /** lv_award_resp lv. */
        public lv: number;

        /** lv_award_resp next_lv. */
        public next_lv: number;

        /** lv_award_resp reward. */
        public reward: (number | Long);

        /**
         * Creates a new lv_award_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_resp instance
         */
        public static create(properties?: AwardMsg.Ilv_award_resp): AwardMsg.lv_award_resp;

        /**
         * Encodes the specified lv_award_resp message. Does not implicitly {@link AwardMsg.lv_award_resp.verify|verify} messages.
         * @param message lv_award_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_resp message, length delimited. Does not implicitly {@link AwardMsg.lv_award_resp.verify|verify} messages.
         * @param message lv_award_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_resp;

        /**
         * Decodes a lv_award_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_resp;

        /**
         * Verifies a lv_award_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_notice_resp. */
    interface Ilv_award_notice_resp {

        /** lv_award_notice_resp award */
        award: (number | Long);

        /** lv_award_notice_resp max_award */
        max_award: (number | Long);
    }

    /** Represents a lv_award_notice_resp. */
    class lv_award_notice_resp implements Ilv_award_notice_resp {

        /**
         * Constructs a new lv_award_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_notice_resp);

        /** lv_award_notice_resp award. */
        public award: (number | Long);

        /** lv_award_notice_resp max_award. */
        public max_award: (number | Long);

        /**
         * Creates a new lv_award_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_notice_resp instance
         */
        public static create(properties?: AwardMsg.Ilv_award_notice_resp): AwardMsg.lv_award_notice_resp;

        /**
         * Encodes the specified lv_award_notice_resp message. Does not implicitly {@link AwardMsg.lv_award_notice_resp.verify|verify} messages.
         * @param message lv_award_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_notice_resp message, length delimited. Does not implicitly {@link AwardMsg.lv_award_notice_resp.verify|verify} messages.
         * @param message lv_award_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_notice_resp;

        /**
         * Decodes a lv_award_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_notice_resp;

        /**
         * Verifies a lv_award_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_notice_set_req. */
    interface Ilv_award_notice_set_req {

        /** lv_award_notice_set_req not_today */
        not_today: boolean;
    }

    /** Represents a lv_award_notice_set_req. */
    class lv_award_notice_set_req implements Ilv_award_notice_set_req {

        /**
         * Constructs a new lv_award_notice_set_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_notice_set_req);

        /** lv_award_notice_set_req not_today. */
        public not_today: boolean;

        /**
         * Creates a new lv_award_notice_set_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_notice_set_req instance
         */
        public static create(properties?: AwardMsg.Ilv_award_notice_set_req): AwardMsg.lv_award_notice_set_req;

        /**
         * Encodes the specified lv_award_notice_set_req message. Does not implicitly {@link AwardMsg.lv_award_notice_set_req.verify|verify} messages.
         * @param message lv_award_notice_set_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_notice_set_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_notice_set_req message, length delimited. Does not implicitly {@link AwardMsg.lv_award_notice_set_req.verify|verify} messages.
         * @param message lv_award_notice_set_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_notice_set_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_notice_set_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_notice_set_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_notice_set_req;

        /**
         * Decodes a lv_award_notice_set_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_notice_set_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_notice_set_req;

        /**
         * Verifies a lv_award_notice_set_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_state_req. */
    interface Igrowth_fund_state_req {
    }

    /** Represents a growth_fund_state_req. */
    class growth_fund_state_req implements Igrowth_fund_state_req {

        /**
         * Constructs a new growth_fund_state_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_state_req);

        /**
         * Creates a new growth_fund_state_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_state_req instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_state_req): AwardMsg.growth_fund_state_req;

        /**
         * Encodes the specified growth_fund_state_req message. Does not implicitly {@link AwardMsg.growth_fund_state_req.verify|verify} messages.
         * @param message growth_fund_state_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_state_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_state_req message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_state_req.verify|verify} messages.
         * @param message growth_fund_state_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_state_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_state_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_state_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_state_req;

        /**
         * Decodes a growth_fund_state_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_state_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_state_req;

        /**
         * Verifies a growth_fund_state_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a growth_fund_state_resp. */
    interface Igrowth_fund_state_resp {

        /** growth_fund_state_resp mark */
        mark: number;

        /** growth_fund_state_resp end_time */
        end_time: (number | Long);
    }

    /** Represents a growth_fund_state_resp. */
    class growth_fund_state_resp implements Igrowth_fund_state_resp {

        /**
         * Constructs a new growth_fund_state_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Igrowth_fund_state_resp);

        /** growth_fund_state_resp mark. */
        public mark: number;

        /** growth_fund_state_resp end_time. */
        public end_time: (number | Long);

        /**
         * Creates a new growth_fund_state_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns growth_fund_state_resp instance
         */
        public static create(properties?: AwardMsg.Igrowth_fund_state_resp): AwardMsg.growth_fund_state_resp;

        /**
         * Encodes the specified growth_fund_state_resp message. Does not implicitly {@link AwardMsg.growth_fund_state_resp.verify|verify} messages.
         * @param message growth_fund_state_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Igrowth_fund_state_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified growth_fund_state_resp message, length delimited. Does not implicitly {@link AwardMsg.growth_fund_state_resp.verify|verify} messages.
         * @param message growth_fund_state_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Igrowth_fund_state_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a growth_fund_state_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns growth_fund_state_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.growth_fund_state_resp;

        /**
         * Decodes a growth_fund_state_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns growth_fund_state_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.growth_fund_state_resp;

        /**
         * Verifies a growth_fund_state_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_state_req. */
    interface Ilv_award_state_req {
    }

    /** Represents a lv_award_state_req. */
    class lv_award_state_req implements Ilv_award_state_req {

        /**
         * Constructs a new lv_award_state_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_state_req);

        /**
         * Creates a new lv_award_state_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_state_req instance
         */
        public static create(properties?: AwardMsg.Ilv_award_state_req): AwardMsg.lv_award_state_req;

        /**
         * Encodes the specified lv_award_state_req message. Does not implicitly {@link AwardMsg.lv_award_state_req.verify|verify} messages.
         * @param message lv_award_state_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_state_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_state_req message, length delimited. Does not implicitly {@link AwardMsg.lv_award_state_req.verify|verify} messages.
         * @param message lv_award_state_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_state_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_state_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_state_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_state_req;

        /**
         * Decodes a lv_award_state_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_state_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_state_req;

        /**
         * Verifies a lv_award_state_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_award_state_resp. */
    interface Ilv_award_state_resp {

        /** lv_award_state_resp mark */
        mark: number;
    }

    /** Represents a lv_award_state_resp. */
    class lv_award_state_resp implements Ilv_award_state_resp {

        /**
         * Constructs a new lv_award_state_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: AwardMsg.Ilv_award_state_resp);

        /** lv_award_state_resp mark. */
        public mark: number;

        /**
         * Creates a new lv_award_state_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_award_state_resp instance
         */
        public static create(properties?: AwardMsg.Ilv_award_state_resp): AwardMsg.lv_award_state_resp;

        /**
         * Encodes the specified lv_award_state_resp message. Does not implicitly {@link AwardMsg.lv_award_state_resp.verify|verify} messages.
         * @param message lv_award_state_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AwardMsg.Ilv_award_state_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_award_state_resp message, length delimited. Does not implicitly {@link AwardMsg.lv_award_state_resp.verify|verify} messages.
         * @param message lv_award_state_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AwardMsg.Ilv_award_state_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_award_state_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_award_state_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): AwardMsg.lv_award_state_resp;

        /**
         * Decodes a lv_award_state_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_award_state_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): AwardMsg.lv_award_state_resp;

        /**
         * Verifies a lv_award_state_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace BaseMsg. */
declare namespace BaseMsg {

    /** c_cmd enum. */
    enum c_cmd {
        heartbeat_req = 0,
        heartbeat_resp = 1,
        pop_up_msg_resp = 2
    }

    /** Represents a msg_base_service */
    class msg_base_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_base_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_base_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_base_service;

        /**
         * Calls heartbeat.
         * @param request heartbeat_req message or plain object
         * @param callback Node-style callback called with the error, if any, and heartbeat_resp
         */
        public heartbeat(request: BaseMsg.Iheartbeat_req, callback: BaseMsg.msg_base_service.heartbeatCallback): void;

        /**
         * Calls heartbeat.
         * @param request heartbeat_req message or plain object
         * @returns Promise
         */
        public heartbeat(request: BaseMsg.Iheartbeat_req): Promise<BaseMsg.heartbeat_resp>;

        /**
         * Calls pop_up_msg.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and pop_up_msg_resp
         */
        public pop_up_msg(request: CommonMsg.Iundefined, callback: BaseMsg.msg_base_service.pop_up_msgCallback): void;

        /**
         * Calls pop_up_msg.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public pop_up_msg(request: CommonMsg.Iundefined): Promise<BaseMsg.pop_up_msg_resp>;
    }

    namespace msg_base_service {

        /**
         * Callback as used by {@link BaseMsg.msg_base_service#heartbeat}.
         * @param error Error, if any
         * @param [response] heartbeat_resp
         */
        type heartbeatCallback = (error: (Error | null), response?: BaseMsg.heartbeat_resp) => void;

        /**
         * Callback as used by {@link BaseMsg.msg_base_service#pop_up_msg}.
         * @param error Error, if any
         * @param [response] pop_up_msg_resp
         */
        type pop_up_msgCallback = (error: (Error | null), response?: BaseMsg.pop_up_msg_resp) => void;
    }

    /** Properties of a heartbeat_req. */
    interface Iheartbeat_req {

        /** heartbeat_req id */
        id: (number | Long);
    }

    /** Represents a heartbeat_req. */
    class heartbeat_req implements Iheartbeat_req {

        /**
         * Constructs a new heartbeat_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: BaseMsg.Iheartbeat_req);

        /** heartbeat_req id. */
        public id: (number | Long);

        /**
         * Creates a new heartbeat_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns heartbeat_req instance
         */
        public static create(properties?: BaseMsg.Iheartbeat_req): BaseMsg.heartbeat_req;

        /**
         * Encodes the specified heartbeat_req message. Does not implicitly {@link BaseMsg.heartbeat_req.verify|verify} messages.
         * @param message heartbeat_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BaseMsg.Iheartbeat_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified heartbeat_req message, length delimited. Does not implicitly {@link BaseMsg.heartbeat_req.verify|verify} messages.
         * @param message heartbeat_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BaseMsg.Iheartbeat_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a heartbeat_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heartbeat_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BaseMsg.heartbeat_req;

        /**
         * Decodes a heartbeat_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns heartbeat_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BaseMsg.heartbeat_req;

        /**
         * Verifies a heartbeat_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a heartbeat_resp. */
    interface Iheartbeat_resp {

        /** heartbeat_resp id */
        id: (number | Long);
    }

    /** Represents a heartbeat_resp. */
    class heartbeat_resp implements Iheartbeat_resp {

        /**
         * Constructs a new heartbeat_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: BaseMsg.Iheartbeat_resp);

        /** heartbeat_resp id. */
        public id: (number | Long);

        /**
         * Creates a new heartbeat_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns heartbeat_resp instance
         */
        public static create(properties?: BaseMsg.Iheartbeat_resp): BaseMsg.heartbeat_resp;

        /**
         * Encodes the specified heartbeat_resp message. Does not implicitly {@link BaseMsg.heartbeat_resp.verify|verify} messages.
         * @param message heartbeat_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BaseMsg.Iheartbeat_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified heartbeat_resp message, length delimited. Does not implicitly {@link BaseMsg.heartbeat_resp.verify|verify} messages.
         * @param message heartbeat_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BaseMsg.Iheartbeat_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a heartbeat_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heartbeat_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BaseMsg.heartbeat_resp;

        /**
         * Decodes a heartbeat_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns heartbeat_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BaseMsg.heartbeat_resp;

        /**
         * Verifies a heartbeat_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a pop_up_msg_resp. */
    interface Ipop_up_msg_resp {

        /** pop_up_msg_resp msg */
        msg: CommonMsg.Idmsg;
    }

    /** Represents a pop_up_msg_resp. */
    class pop_up_msg_resp implements Ipop_up_msg_resp {

        /**
         * Constructs a new pop_up_msg_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: BaseMsg.Ipop_up_msg_resp);

        /** pop_up_msg_resp msg. */
        public msg: CommonMsg.Idmsg;

        /**
         * Creates a new pop_up_msg_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pop_up_msg_resp instance
         */
        public static create(properties?: BaseMsg.Ipop_up_msg_resp): BaseMsg.pop_up_msg_resp;

        /**
         * Encodes the specified pop_up_msg_resp message. Does not implicitly {@link BaseMsg.pop_up_msg_resp.verify|verify} messages.
         * @param message pop_up_msg_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BaseMsg.Ipop_up_msg_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified pop_up_msg_resp message, length delimited. Does not implicitly {@link BaseMsg.pop_up_msg_resp.verify|verify} messages.
         * @param message pop_up_msg_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BaseMsg.Ipop_up_msg_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a pop_up_msg_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pop_up_msg_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BaseMsg.pop_up_msg_resp;

        /**
         * Decodes a pop_up_msg_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pop_up_msg_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BaseMsg.pop_up_msg_resp;

        /**
         * Verifies a pop_up_msg_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace BroadCastMsg. */
declare namespace BroadCastMsg {

    /** c_cmd enum. */
    enum c_cmd {
        bcast_world_resp = 1,
        bcast_room_resp = 2,
        bcast_msg_resp = 3
    }

    /** Represents a msg_broadcast_service */
    class msg_broadcast_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_broadcast_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_broadcast_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_broadcast_service;

        /**
         * Calls broadcastWorld.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bcast_world_resp
         */
        public broadcastWorld(request: CommonMsg.Iundefined, callback: BroadCastMsg.msg_broadcast_service.broadcastWorldCallback): void;

        /**
         * Calls broadcastWorld.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public broadcastWorld(request: CommonMsg.Iundefined): Promise<BroadCastMsg.bcast_world_resp>;

        /**
         * Calls broadcastRoom.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bcast_room_resp
         */
        public broadcastRoom(request: CommonMsg.Iundefined, callback: BroadCastMsg.msg_broadcast_service.broadcastRoomCallback): void;

        /**
         * Calls broadcastRoom.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public broadcastRoom(request: CommonMsg.Iundefined): Promise<BroadCastMsg.bcast_room_resp>;

        /**
         * Calls broadcastMsg.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bcast_msg_resp
         */
        public broadcastMsg(request: CommonMsg.Iundefined, callback: BroadCastMsg.msg_broadcast_service.broadcastMsgCallback): void;

        /**
         * Calls broadcastMsg.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public broadcastMsg(request: CommonMsg.Iundefined): Promise<BroadCastMsg.bcast_msg_resp>;
    }

    namespace msg_broadcast_service {

        /**
         * Callback as used by {@link BroadCastMsg.msg_broadcast_service#broadcastWorld}.
         * @param error Error, if any
         * @param [response] bcast_world_resp
         */
        type broadcastWorldCallback = (error: (Error | null), response?: BroadCastMsg.bcast_world_resp) => void;

        /**
         * Callback as used by {@link BroadCastMsg.msg_broadcast_service#broadcastRoom}.
         * @param error Error, if any
         * @param [response] bcast_room_resp
         */
        type broadcastRoomCallback = (error: (Error | null), response?: BroadCastMsg.bcast_room_resp) => void;

        /**
         * Callback as used by {@link BroadCastMsg.msg_broadcast_service#broadcastMsg}.
         * @param error Error, if any
         * @param [response] bcast_msg_resp
         */
        type broadcastMsgCallback = (error: (Error | null), response?: BroadCastMsg.bcast_msg_resp) => void;
    }

    /** Properties of a bcast_world_resp. */
    interface Ibcast_world_resp {

        /** bcast_world_resp content */
        content: string;
    }

    /** Represents a bcast_world_resp. */
    class bcast_world_resp implements Ibcast_world_resp {

        /**
         * Constructs a new bcast_world_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: BroadCastMsg.Ibcast_world_resp);

        /** bcast_world_resp content. */
        public content: string;

        /**
         * Creates a new bcast_world_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bcast_world_resp instance
         */
        public static create(properties?: BroadCastMsg.Ibcast_world_resp): BroadCastMsg.bcast_world_resp;

        /**
         * Encodes the specified bcast_world_resp message. Does not implicitly {@link BroadCastMsg.bcast_world_resp.verify|verify} messages.
         * @param message bcast_world_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BroadCastMsg.Ibcast_world_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bcast_world_resp message, length delimited. Does not implicitly {@link BroadCastMsg.bcast_world_resp.verify|verify} messages.
         * @param message bcast_world_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BroadCastMsg.Ibcast_world_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bcast_world_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bcast_world_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BroadCastMsg.bcast_world_resp;

        /**
         * Decodes a bcast_world_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bcast_world_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BroadCastMsg.bcast_world_resp;

        /**
         * Verifies a bcast_world_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bcast_room_resp. */
    interface Ibcast_room_resp {

        /** bcast_room_resp content */
        content: string;
    }

    /** Represents a bcast_room_resp. */
    class bcast_room_resp implements Ibcast_room_resp {

        /**
         * Constructs a new bcast_room_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: BroadCastMsg.Ibcast_room_resp);

        /** bcast_room_resp content. */
        public content: string;

        /**
         * Creates a new bcast_room_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bcast_room_resp instance
         */
        public static create(properties?: BroadCastMsg.Ibcast_room_resp): BroadCastMsg.bcast_room_resp;

        /**
         * Encodes the specified bcast_room_resp message. Does not implicitly {@link BroadCastMsg.bcast_room_resp.verify|verify} messages.
         * @param message bcast_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BroadCastMsg.Ibcast_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bcast_room_resp message, length delimited. Does not implicitly {@link BroadCastMsg.bcast_room_resp.verify|verify} messages.
         * @param message bcast_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BroadCastMsg.Ibcast_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bcast_room_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bcast_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BroadCastMsg.bcast_room_resp;

        /**
         * Decodes a bcast_room_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bcast_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BroadCastMsg.bcast_room_resp;

        /**
         * Verifies a bcast_room_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bcast_msg_resp. */
    interface Ibcast_msg_resp {

        /** bcast_msg_resp msg */
        msg: CommonMsg.Idmsg;
    }

    /** Represents a bcast_msg_resp. */
    class bcast_msg_resp implements Ibcast_msg_resp {

        /**
         * Constructs a new bcast_msg_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: BroadCastMsg.Ibcast_msg_resp);

        /** bcast_msg_resp msg. */
        public msg: CommonMsg.Idmsg;

        /**
         * Creates a new bcast_msg_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bcast_msg_resp instance
         */
        public static create(properties?: BroadCastMsg.Ibcast_msg_resp): BroadCastMsg.bcast_msg_resp;

        /**
         * Encodes the specified bcast_msg_resp message. Does not implicitly {@link BroadCastMsg.bcast_msg_resp.verify|verify} messages.
         * @param message bcast_msg_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: BroadCastMsg.Ibcast_msg_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bcast_msg_resp message, length delimited. Does not implicitly {@link BroadCastMsg.bcast_msg_resp.verify|verify} messages.
         * @param message bcast_msg_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: BroadCastMsg.Ibcast_msg_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bcast_msg_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bcast_msg_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): BroadCastMsg.bcast_msg_resp;

        /**
         * Decodes a bcast_msg_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bcast_msg_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): BroadCastMsg.bcast_msg_resp;

        /**
         * Verifies a bcast_msg_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace CodeMsg. */
declare namespace CodeMsg {

    /** msg_code enum. */
    enum msg_code {
        CODE_SUCCESS = 1,
        CODE_FAIL = 2
    }
}

/** Namespace ExtendMsg. */
declare namespace ExtendMsg {

    /** c_cmd enum. */
    enum c_cmd {
        extend_box_req = 0,
        extend_box_resp = 1,
        furious_fish_resp = 2
    }

    /** Represents a msg_extend_service */
    class msg_extend_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_extend_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_extend_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_extend_service;

        /**
         * Calls extend_box.
         * @param request extend_box_req message or plain object
         * @param callback Node-style callback called with the error, if any, and extend_box_resp
         */
        public extend_box(request: ExtendMsg.Iextend_box_req, callback: ExtendMsg.msg_extend_service.extend_boxCallback): void;

        /**
         * Calls extend_box.
         * @param request extend_box_req message or plain object
         * @returns Promise
         */
        public extend_box(request: ExtendMsg.Iextend_box_req): Promise<ExtendMsg.extend_box_resp>;

        /**
         * Calls extend_furious.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and furious_fish_resp
         */
        public extend_furious(request: CommonMsg.Iundefined, callback: ExtendMsg.msg_extend_service.extend_furiousCallback): void;

        /**
         * Calls extend_furious.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public extend_furious(request: CommonMsg.Iundefined): Promise<ExtendMsg.furious_fish_resp>;
    }

    namespace msg_extend_service {

        /**
         * Callback as used by {@link ExtendMsg.msg_extend_service#extend_box}.
         * @param error Error, if any
         * @param [response] extend_box_resp
         */
        type extend_boxCallback = (error: (Error | null), response?: ExtendMsg.extend_box_resp) => void;

        /**
         * Callback as used by {@link ExtendMsg.msg_extend_service#extend_furious}.
         * @param error Error, if any
         * @param [response] furious_fish_resp
         */
        type extend_furiousCallback = (error: (Error | null), response?: ExtendMsg.furious_fish_resp) => void;
    }

    /** Properties of an extend_box_req. */
    interface Iextend_box_req {
    }

    /** Represents an extend_box_req. */
    class extend_box_req implements Iextend_box_req {

        /**
         * Constructs a new extend_box_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExtendMsg.Iextend_box_req);

        /**
         * Creates a new extend_box_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns extend_box_req instance
         */
        public static create(properties?: ExtendMsg.Iextend_box_req): ExtendMsg.extend_box_req;

        /**
         * Encodes the specified extend_box_req message. Does not implicitly {@link ExtendMsg.extend_box_req.verify|verify} messages.
         * @param message extend_box_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExtendMsg.Iextend_box_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified extend_box_req message, length delimited. Does not implicitly {@link ExtendMsg.extend_box_req.verify|verify} messages.
         * @param message extend_box_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExtendMsg.Iextend_box_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an extend_box_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns extend_box_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ExtendMsg.extend_box_req;

        /**
         * Decodes an extend_box_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns extend_box_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ExtendMsg.extend_box_req;

        /**
         * Verifies an extend_box_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an extend_box_resp. */
    interface Iextend_box_resp {

        /** extend_box_resp uid */
        uid: (number | Long);

        /** extend_box_resp score */
        score: number;

        /** extend_box_resp hit_num */
        hit_num: number;

        /** extend_box_resp chips */
        chips?: (number | Long | null);

        /** extend_box_resp show_chips */
        show_chips?: (number | Long | null);
    }

    /** Represents an extend_box_resp. */
    class extend_box_resp implements Iextend_box_resp {

        /**
         * Constructs a new extend_box_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExtendMsg.Iextend_box_resp);

        /** extend_box_resp uid. */
        public uid: (number | Long);

        /** extend_box_resp score. */
        public score: number;

        /** extend_box_resp hit_num. */
        public hit_num: number;

        /** extend_box_resp chips. */
        public chips: (number | Long);

        /** extend_box_resp show_chips. */
        public show_chips: (number | Long);

        /**
         * Creates a new extend_box_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns extend_box_resp instance
         */
        public static create(properties?: ExtendMsg.Iextend_box_resp): ExtendMsg.extend_box_resp;

        /**
         * Encodes the specified extend_box_resp message. Does not implicitly {@link ExtendMsg.extend_box_resp.verify|verify} messages.
         * @param message extend_box_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExtendMsg.Iextend_box_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified extend_box_resp message, length delimited. Does not implicitly {@link ExtendMsg.extend_box_resp.verify|verify} messages.
         * @param message extend_box_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExtendMsg.Iextend_box_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an extend_box_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns extend_box_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ExtendMsg.extend_box_resp;

        /**
         * Decodes an extend_box_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns extend_box_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ExtendMsg.extend_box_resp;

        /**
         * Verifies an extend_box_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a furious_fish_resp. */
    interface Ifurious_fish_resp {

        /** furious_fish_resp type */
        type: number;

        /** furious_fish_resp id */
        id: (number | Long);

        /** furious_fish_resp level */
        level: number;

        /** furious_fish_resp fish_rate */
        fish_rate: number;
    }

    /** Represents a furious_fish_resp. */
    class furious_fish_resp implements Ifurious_fish_resp {

        /**
         * Constructs a new furious_fish_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ExtendMsg.Ifurious_fish_resp);

        /** furious_fish_resp type. */
        public type: number;

        /** furious_fish_resp id. */
        public id: (number | Long);

        /** furious_fish_resp level. */
        public level: number;

        /** furious_fish_resp fish_rate. */
        public fish_rate: number;

        /**
         * Creates a new furious_fish_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns furious_fish_resp instance
         */
        public static create(properties?: ExtendMsg.Ifurious_fish_resp): ExtendMsg.furious_fish_resp;

        /**
         * Encodes the specified furious_fish_resp message. Does not implicitly {@link ExtendMsg.furious_fish_resp.verify|verify} messages.
         * @param message furious_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ExtendMsg.Ifurious_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified furious_fish_resp message, length delimited. Does not implicitly {@link ExtendMsg.furious_fish_resp.verify|verify} messages.
         * @param message furious_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ExtendMsg.Ifurious_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a furious_fish_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns furious_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ExtendMsg.furious_fish_resp;

        /**
         * Decodes a furious_fish_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns furious_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ExtendMsg.furious_fish_resp;

        /**
         * Verifies a furious_fish_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace RoleMsg. */
declare namespace RoleMsg {

    /** msg_role_code enum. */
    enum msg_role_code {
        ROLE_CODE_SUCCESS = 1,
        ROLE_CODE_FAIL = 2
    }

    /** msg_relogin_code enum. */
    enum msg_relogin_code {
        RELOGIN_NORMAL = 1,
        RELOGIN_RECONNECT = 2
    }

    /** Properties of a role_info. */
    interface Irole_info {

        /** role_info agent_id */
        agent_id: (number | Long);

        /** role_info owner_id */
        owner_id: (number | Long);

        /** role_info account */
        account: string;

        /** role_info jetton */
        jetton: (number | Long);

        /** role_info level */
        level: number;

        /** role_info nickname */
        nickname: string;

        /** role_info roleId */
        roleId: (number | Long);

        /** role_info jetton_show */
        jetton_show: (number | Long);

        /** role_info is_new */
        is_new?: (boolean | null);

        /** role_info main_wallet */
        main_wallet?: (number | Long | null);

        /** role_info auto_wallet */
        auto_wallet?: (number | Long | null);

        /** role_info left_race_price */
        left_race_price?: (number | null);

        /** role_info is_wallet */
        is_wallet?: (boolean | null);

        /** role_info exp */
        exp?: (number | Long | null);

        /** role_info need_exp */
        need_exp?: (number | Long | null);

        /** role_info top_agent_id */
        top_agent_id?: (number | Long | null);
    }

    /** Represents a role_info. */
    class role_info implements Irole_info {

        /**
         * Constructs a new role_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleMsg.Irole_info);

        /** role_info agent_id. */
        public agent_id: (number | Long);

        /** role_info owner_id. */
        public owner_id: (number | Long);

        /** role_info account. */
        public account: string;

        /** role_info jetton. */
        public jetton: (number | Long);

        /** role_info level. */
        public level: number;

        /** role_info nickname. */
        public nickname: string;

        /** role_info roleId. */
        public roleId: (number | Long);

        /** role_info jetton_show. */
        public jetton_show: (number | Long);

        /** role_info is_new. */
        public is_new: boolean;

        /** role_info main_wallet. */
        public main_wallet: (number | Long);

        /** role_info auto_wallet. */
        public auto_wallet: (number | Long);

        /** role_info left_race_price. */
        public left_race_price: number;

        /** role_info is_wallet. */
        public is_wallet: boolean;

        /** role_info exp. */
        public exp: (number | Long);

        /** role_info need_exp. */
        public need_exp: (number | Long);

        /** role_info top_agent_id. */
        public top_agent_id: (number | Long);

        /**
         * Creates a new role_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns role_info instance
         */
        public static create(properties?: RoleMsg.Irole_info): RoleMsg.role_info;

        /**
         * Encodes the specified role_info message. Does not implicitly {@link RoleMsg.role_info.verify|verify} messages.
         * @param message role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleMsg.Irole_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified role_info message, length delimited. Does not implicitly {@link RoleMsg.role_info.verify|verify} messages.
         * @param message role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleMsg.Irole_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a role_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleMsg.role_info;

        /**
         * Decodes a role_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleMsg.role_info;

        /**
         * Verifies a role_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a role_reconnect. */
    interface Irole_reconnect {

        /** role_reconnect code */
        code: RoleMsg.msg_relogin_code;

        /** role_reconnect roomtype */
        roomtype: CommonMsg.room_type;

        /** role_reconnect raceid */
        raceid?: (number | null);
    }

    /** Represents a role_reconnect. */
    class role_reconnect implements Irole_reconnect {

        /**
         * Constructs a new role_reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleMsg.Irole_reconnect);

        /** role_reconnect code. */
        public code: RoleMsg.msg_relogin_code;

        /** role_reconnect roomtype. */
        public roomtype: CommonMsg.room_type;

        /** role_reconnect raceid. */
        public raceid: number;

        /**
         * Creates a new role_reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns role_reconnect instance
         */
        public static create(properties?: RoleMsg.Irole_reconnect): RoleMsg.role_reconnect;

        /**
         * Encodes the specified role_reconnect message. Does not implicitly {@link RoleMsg.role_reconnect.verify|verify} messages.
         * @param message role_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleMsg.Irole_reconnect, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified role_reconnect message, length delimited. Does not implicitly {@link RoleMsg.role_reconnect.verify|verify} messages.
         * @param message role_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleMsg.Irole_reconnect, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a role_reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns role_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleMsg.role_reconnect;

        /**
         * Decodes a role_reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns role_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleMsg.role_reconnect;

        /**
         * Verifies a role_reconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace LoginMsg. */
declare namespace LoginMsg {

    /** c_cmd enum. */
    enum c_cmd {
        login_req = 0,
        login_resp = 1,
        time_req = 3,
        time_resp = 4,
        login_account_req = 5,
        kictout_resp = 6,
        update_token_resp = 7,
        switch_resp = 8
    }

    /** Represents a msg_login_service */
    class msg_login_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_login_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_login_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_login_service;

        /**
         * Calls login.
         * @param request login_req message or plain object
         * @param callback Node-style callback called with the error, if any, and login_resp
         */
        public login(request: LoginMsg.Ilogin_req, callback: LoginMsg.msg_login_service.loginCallback): void;

        /**
         * Calls login.
         * @param request login_req message or plain object
         * @returns Promise
         */
        public login(request: LoginMsg.Ilogin_req): Promise<LoginMsg.login_resp>;

        /**
         * Calls time.
         * @param request time_req message or plain object
         * @param callback Node-style callback called with the error, if any, and time_resp
         */
        public time(request: LoginMsg.Itime_req, callback: LoginMsg.msg_login_service.timeCallback): void;

        /**
         * Calls time.
         * @param request time_req message or plain object
         * @returns Promise
         */
        public time(request: LoginMsg.Itime_req): Promise<LoginMsg.time_resp>;

        /**
         * Calls login_account.
         * @param request login_account_req message or plain object
         * @param callback Node-style callback called with the error, if any, and login_resp
         */
        public login_account(request: LoginMsg.Ilogin_account_req, callback: LoginMsg.msg_login_service.login_accountCallback): void;

        /**
         * Calls login_account.
         * @param request login_account_req message or plain object
         * @returns Promise
         */
        public login_account(request: LoginMsg.Ilogin_account_req): Promise<LoginMsg.login_resp>;

        /**
         * Calls kictout.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and kictout_resp
         */
        public kictout(request: CommonMsg.Iundefined, callback: LoginMsg.msg_login_service.kictoutCallback): void;

        /**
         * Calls kictout.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public kictout(request: CommonMsg.Iundefined): Promise<LoginMsg.kictout_resp>;

        /**
         * Calls update_token.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and update_token_resp
         */
        public update_token(request: CommonMsg.Iundefined, callback: LoginMsg.msg_login_service.update_tokenCallback): void;

        /**
         * Calls update_token.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public update_token(request: CommonMsg.Iundefined): Promise<LoginMsg.update_token_resp>;

        /**
         * Calls switch.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and switch_resp
         */
        public switch(request: CommonMsg.Iundefined, callback: LoginMsg.msg_login_service.switchCallback): void;

        /**
         * Calls switch.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public switch(request: CommonMsg.Iundefined): Promise<LoginMsg.switch_resp>;
    }

    namespace msg_login_service {

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#login}.
         * @param error Error, if any
         * @param [response] login_resp
         */
        type loginCallback = (error: (Error | null), response?: LoginMsg.login_resp) => void;

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#time}.
         * @param error Error, if any
         * @param [response] time_resp
         */
        type timeCallback = (error: (Error | null), response?: LoginMsg.time_resp) => void;

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#login_account}.
         * @param error Error, if any
         * @param [response] login_resp
         */
        type login_accountCallback = (error: (Error | null), response?: LoginMsg.login_resp) => void;

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#kictout}.
         * @param error Error, if any
         * @param [response] kictout_resp
         */
        type kictoutCallback = (error: (Error | null), response?: LoginMsg.kictout_resp) => void;

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#update_token}.
         * @param error Error, if any
         * @param [response] update_token_resp
         */
        type update_tokenCallback = (error: (Error | null), response?: LoginMsg.update_token_resp) => void;

        /**
         * Callback as used by {@link LoginMsg.msg_login_service#switch_}.
         * @param error Error, if any
         * @param [response] switch_resp
         */
        type switchCallback = (error: (Error | null), response?: LoginMsg.switch_resp) => void;
    }

    /** login_mode_code enum. */
    enum login_mode_code {
        normal = 1,
        reconnect = 2
    }

    /** login_code enum. */
    enum login_code {
        SUCCESS = 1,
        FAIL = 2,
        ERR_ACCOUNT = 3,
        TOKEN_TIMEOUT = 4,
        TOKEN_ERROR = 5,
        OTHER_LOGIN = 6,
        FORCE_KICTOUT = 7,
        MAINTAIN_KICTOUT = 8
    }

    /** Properties of a login_req. */
    interface Ilogin_req {

        /** login_req code */
        code: LoginMsg.login_mode_code;

        /** login_req token */
        token: string;

        /** login_req lang */
        lang: string;
    }

    /** Represents a login_req. */
    class login_req implements Ilogin_req {

        /**
         * Constructs a new login_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ilogin_req);

        /** login_req code. */
        public code: LoginMsg.login_mode_code;

        /** login_req token. */
        public token: string;

        /** login_req lang. */
        public lang: string;

        /**
         * Creates a new login_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login_req instance
         */
        public static create(properties?: LoginMsg.Ilogin_req): LoginMsg.login_req;

        /**
         * Encodes the specified login_req message. Does not implicitly {@link LoginMsg.login_req.verify|verify} messages.
         * @param message login_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ilogin_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified login_req message, length delimited. Does not implicitly {@link LoginMsg.login_req.verify|verify} messages.
         * @param message login_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ilogin_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a login_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.login_req;

        /**
         * Decodes a login_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.login_req;

        /**
         * Verifies a login_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_config. */
    interface Ifish_config {

        /** fish_config fish_type */
        fish_type: number;

        /** fish_config fish_class */
        fish_class: number;

        /** fish_config fish_speed */
        fish_speed: number;

        /** fish_config fish_rate */
        fish_rate: number;

        /** fish_config is_warning */
        is_warning?: (boolean | null);
    }

    /** Represents a fish_config. */
    class fish_config implements Ifish_config {

        /**
         * Constructs a new fish_config.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ifish_config);

        /** fish_config fish_type. */
        public fish_type: number;

        /** fish_config fish_class. */
        public fish_class: number;

        /** fish_config fish_speed. */
        public fish_speed: number;

        /** fish_config fish_rate. */
        public fish_rate: number;

        /** fish_config is_warning. */
        public is_warning: boolean;

        /**
         * Creates a new fish_config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_config instance
         */
        public static create(properties?: LoginMsg.Ifish_config): LoginMsg.fish_config;

        /**
         * Encodes the specified fish_config message. Does not implicitly {@link LoginMsg.fish_config.verify|verify} messages.
         * @param message fish_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ifish_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_config message, length delimited. Does not implicitly {@link LoginMsg.fish_config.verify|verify} messages.
         * @param message fish_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ifish_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.fish_config;

        /**
         * Decodes a fish_config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.fish_config;

        /**
         * Verifies a fish_config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a login_resp. */
    interface Ilogin_resp {

        /** login_resp code */
        code: LoginMsg.login_code;

        /** login_resp role */
        role?: (RoleMsg.Irole_info | null);

        /** login_resp reconnect */
        reconnect?: (RoleMsg.Irole_reconnect | null);

        /** login_resp room_info */
        room_info?: (LoginMsg.Ilogin_room_info[] | null);

        /** login_resp fish_info */
        fish_info?: (LoginMsg.Ifish_config[] | null);

        /** login_resp jwt_token */
        jwt_token?: (string | null);

        /** login_resp wave_info */
        wave_info?: (Uint8Array | null);

        /** login_resp err_msg */
        err_msg?: (string | null);
    }

    /** Represents a login_resp. */
    class login_resp implements Ilogin_resp {

        /**
         * Constructs a new login_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ilogin_resp);

        /** login_resp code. */
        public code: LoginMsg.login_code;

        /** login_resp role. */
        public role?: (RoleMsg.Irole_info | null);

        /** login_resp reconnect. */
        public reconnect?: (RoleMsg.Irole_reconnect | null);

        /** login_resp room_info. */
        public room_info: LoginMsg.Ilogin_room_info[];

        /** login_resp fish_info. */
        public fish_info: LoginMsg.Ifish_config[];

        /** login_resp jwt_token. */
        public jwt_token: string;

        /** login_resp wave_info. */
        public wave_info: Uint8Array;

        /** login_resp err_msg. */
        public err_msg: string;

        /**
         * Creates a new login_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login_resp instance
         */
        public static create(properties?: LoginMsg.Ilogin_resp): LoginMsg.login_resp;

        /**
         * Encodes the specified login_resp message. Does not implicitly {@link LoginMsg.login_resp.verify|verify} messages.
         * @param message login_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ilogin_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified login_resp message, length delimited. Does not implicitly {@link LoginMsg.login_resp.verify|verify} messages.
         * @param message login_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ilogin_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a login_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.login_resp;

        /**
         * Decodes a login_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.login_resp;

        /**
         * Verifies a login_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a switch_info. */
    interface Iswitch_info {

        /** switch_info type */
        type: number;

        /** switch_info is_on */
        is_on: boolean;
    }

    /** Represents a switch_info. */
    class switch_info implements Iswitch_info {

        /**
         * Constructs a new switch_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Iswitch_info);

        /** switch_info type. */
        public type: number;

        /** switch_info is_on. */
        public is_on: boolean;

        /**
         * Creates a new switch_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns switch_info instance
         */
        public static create(properties?: LoginMsg.Iswitch_info): LoginMsg.switch_info;

        /**
         * Encodes the specified switch_info message. Does not implicitly {@link LoginMsg.switch_info.verify|verify} messages.
         * @param message switch_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Iswitch_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified switch_info message, length delimited. Does not implicitly {@link LoginMsg.switch_info.verify|verify} messages.
         * @param message switch_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Iswitch_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a switch_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns switch_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.switch_info;

        /**
         * Decodes a switch_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns switch_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.switch_info;

        /**
         * Verifies a switch_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a switch_resp. */
    interface Iswitch_resp {

        /** switch_resp switch */
        "switch"?: (LoginMsg.Iswitch_info[] | null);
    }

    /** Represents a switch_resp. */
    class switch_resp implements Iswitch_resp {

        /**
         * Constructs a new switch_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Iswitch_resp);

        /** switch_resp switch. */
        public switch: LoginMsg.Iswitch_info[];

        /**
         * Creates a new switch_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns switch_resp instance
         */
        public static create(properties?: LoginMsg.Iswitch_resp): LoginMsg.switch_resp;

        /**
         * Encodes the specified switch_resp message. Does not implicitly {@link LoginMsg.switch_resp.verify|verify} messages.
         * @param message switch_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Iswitch_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified switch_resp message, length delimited. Does not implicitly {@link LoginMsg.switch_resp.verify|verify} messages.
         * @param message switch_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Iswitch_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a switch_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns switch_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.switch_resp;

        /**
         * Decodes a switch_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns switch_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.switch_resp;

        /**
         * Verifies a switch_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a login_account_req. */
    interface Ilogin_account_req {

        /** login_account_req account */
        account: string;

        /** login_account_req token */
        token: string;

        /** login_account_req lang */
        lang: string;
    }

    /** Represents a login_account_req. */
    class login_account_req implements Ilogin_account_req {

        /**
         * Constructs a new login_account_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ilogin_account_req);

        /** login_account_req account. */
        public account: string;

        /** login_account_req token. */
        public token: string;

        /** login_account_req lang. */
        public lang: string;

        /**
         * Creates a new login_account_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login_account_req instance
         */
        public static create(properties?: LoginMsg.Ilogin_account_req): LoginMsg.login_account_req;

        /**
         * Encodes the specified login_account_req message. Does not implicitly {@link LoginMsg.login_account_req.verify|verify} messages.
         * @param message login_account_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ilogin_account_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified login_account_req message, length delimited. Does not implicitly {@link LoginMsg.login_account_req.verify|verify} messages.
         * @param message login_account_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ilogin_account_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a login_account_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login_account_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.login_account_req;

        /**
         * Decodes a login_account_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login_account_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.login_account_req;

        /**
         * Verifies a login_account_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a time_req. */
    interface Itime_req {
    }

    /** Represents a time_req. */
    class time_req implements Itime_req {

        /**
         * Constructs a new time_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Itime_req);

        /**
         * Creates a new time_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns time_req instance
         */
        public static create(properties?: LoginMsg.Itime_req): LoginMsg.time_req;

        /**
         * Encodes the specified time_req message. Does not implicitly {@link LoginMsg.time_req.verify|verify} messages.
         * @param message time_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Itime_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified time_req message, length delimited. Does not implicitly {@link LoginMsg.time_req.verify|verify} messages.
         * @param message time_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Itime_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a time_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns time_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.time_req;

        /**
         * Decodes a time_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns time_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.time_req;

        /**
         * Verifies a time_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a time_resp. */
    interface Itime_resp {

        /** time_resp time */
        time: (number | Long);
    }

    /** Represents a time_resp. */
    class time_resp implements Itime_resp {

        /**
         * Constructs a new time_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Itime_resp);

        /** time_resp time. */
        public time: (number | Long);

        /**
         * Creates a new time_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns time_resp instance
         */
        public static create(properties?: LoginMsg.Itime_resp): LoginMsg.time_resp;

        /**
         * Encodes the specified time_resp message. Does not implicitly {@link LoginMsg.time_resp.verify|verify} messages.
         * @param message time_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Itime_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified time_resp message, length delimited. Does not implicitly {@link LoginMsg.time_resp.verify|verify} messages.
         * @param message time_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Itime_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a time_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns time_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.time_resp;

        /**
         * Decodes a time_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns time_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.time_resp;

        /**
         * Verifies a time_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a kictout_resp. */
    interface Ikictout_resp {

        /** kictout_resp code */
        code: LoginMsg.login_code;

        /** kictout_resp err_msg */
        err_msg?: (string | null);
    }

    /** Represents a kictout_resp. */
    class kictout_resp implements Ikictout_resp {

        /**
         * Constructs a new kictout_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ikictout_resp);

        /** kictout_resp code. */
        public code: LoginMsg.login_code;

        /** kictout_resp err_msg. */
        public err_msg: string;

        /**
         * Creates a new kictout_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns kictout_resp instance
         */
        public static create(properties?: LoginMsg.Ikictout_resp): LoginMsg.kictout_resp;

        /**
         * Encodes the specified kictout_resp message. Does not implicitly {@link LoginMsg.kictout_resp.verify|verify} messages.
         * @param message kictout_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ikictout_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified kictout_resp message, length delimited. Does not implicitly {@link LoginMsg.kictout_resp.verify|verify} messages.
         * @param message kictout_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ikictout_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a kictout_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns kictout_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.kictout_resp;

        /**
         * Decodes a kictout_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns kictout_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.kictout_resp;

        /**
         * Verifies a kictout_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a login_room_info. */
    interface Ilogin_room_info {

        /** login_room_info room_type */
        room_type: number;

        /** login_room_info ante */
        ante: number;

        /** login_room_info lowest */
        lowest: (number | Long);

        /** login_room_info battery */
        battery?: (number[] | null);
    }

    /** Represents a login_room_info. */
    class login_room_info implements Ilogin_room_info {

        /**
         * Constructs a new login_room_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Ilogin_room_info);

        /** login_room_info room_type. */
        public room_type: number;

        /** login_room_info ante. */
        public ante: number;

        /** login_room_info lowest. */
        public lowest: (number | Long);

        /** login_room_info battery. */
        public battery: number[];

        /**
         * Creates a new login_room_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login_room_info instance
         */
        public static create(properties?: LoginMsg.Ilogin_room_info): LoginMsg.login_room_info;

        /**
         * Encodes the specified login_room_info message. Does not implicitly {@link LoginMsg.login_room_info.verify|verify} messages.
         * @param message login_room_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Ilogin_room_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified login_room_info message, length delimited. Does not implicitly {@link LoginMsg.login_room_info.verify|verify} messages.
         * @param message login_room_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Ilogin_room_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a login_room_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login_room_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.login_room_info;

        /**
         * Decodes a login_room_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login_room_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.login_room_info;

        /**
         * Verifies a login_room_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an update_token_resp. */
    interface Iupdate_token_resp {

        /** update_token_resp jwt_token */
        jwt_token?: (string | null);
    }

    /** Represents an update_token_resp. */
    class update_token_resp implements Iupdate_token_resp {

        /**
         * Constructs a new update_token_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: LoginMsg.Iupdate_token_resp);

        /** update_token_resp jwt_token. */
        public jwt_token: string;

        /**
         * Creates a new update_token_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns update_token_resp instance
         */
        public static create(properties?: LoginMsg.Iupdate_token_resp): LoginMsg.update_token_resp;

        /**
         * Encodes the specified update_token_resp message. Does not implicitly {@link LoginMsg.update_token_resp.verify|verify} messages.
         * @param message update_token_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: LoginMsg.Iupdate_token_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified update_token_resp message, length delimited. Does not implicitly {@link LoginMsg.update_token_resp.verify|verify} messages.
         * @param message update_token_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: LoginMsg.Iupdate_token_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an update_token_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns update_token_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): LoginMsg.update_token_resp;

        /**
         * Decodes an update_token_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns update_token_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): LoginMsg.update_token_resp;

        /**
         * Verifies an update_token_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace MailMsg. */
declare namespace MailMsg {

    /** c_cmd enum. */
    enum c_cmd {
        mail_resp = 1
    }

    /** Represents a msg_mail_service */
    class msg_mail_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_mail_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_mail_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_mail_service;

        /**
         * Calls mail.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and mail_resp
         */
        public mail(request: CommonMsg.Iundefined, callback: MailMsg.msg_mail_service.mailCallback): void;

        /**
         * Calls mail.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public mail(request: CommonMsg.Iundefined): Promise<MailMsg.mail_resp>;
    }

    namespace msg_mail_service {

        /**
         * Callback as used by {@link MailMsg.msg_mail_service#mail}.
         * @param error Error, if any
         * @param [response] mail_resp
         */
        type mailCallback = (error: (Error | null), response?: MailMsg.mail_resp) => void;
    }

    /** Properties of a mail_resp. */
    interface Imail_resp {

        /** mail_resp title */
        title: string;

        /** mail_resp text */
        text: string;

        /** mail_resp chips */
        chips: (number | Long);
    }

    /** Represents a mail_resp. */
    class mail_resp implements Imail_resp {

        /**
         * Constructs a new mail_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: MailMsg.Imail_resp);

        /** mail_resp title. */
        public title: string;

        /** mail_resp text. */
        public text: string;

        /** mail_resp chips. */
        public chips: (number | Long);

        /**
         * Creates a new mail_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mail_resp instance
         */
        public static create(properties?: MailMsg.Imail_resp): MailMsg.mail_resp;

        /**
         * Encodes the specified mail_resp message. Does not implicitly {@link MailMsg.mail_resp.verify|verify} messages.
         * @param message mail_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MailMsg.Imail_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified mail_resp message, length delimited. Does not implicitly {@link MailMsg.mail_resp.verify|verify} messages.
         * @param message mail_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MailMsg.Imail_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a mail_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mail_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): MailMsg.mail_resp;

        /**
         * Decodes a mail_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mail_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): MailMsg.mail_resp;

        /**
         * Verifies a mail_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace PoolMsg. */
declare namespace PoolMsg {

    /** c_cmd enum. */
    enum c_cmd {
        bcast_jp_resp = 1,
        amount_jp_resp = 2
    }

    /** Represents a msg_pool_service */
    class msg_pool_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_pool_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_pool_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_pool_service;

        /**
         * Calls broadcast_jp_req.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bcast_jp_resp
         */
        public broadcast_jp_req(request: CommonMsg.Iundefined, callback: PoolMsg.msg_pool_service.broadcast_jp_reqCallback): void;

        /**
         * Calls broadcast_jp_req.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public broadcast_jp_req(request: CommonMsg.Iundefined): Promise<PoolMsg.bcast_jp_resp>;

        /**
         * Calls amount_jp_req.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and amount_jp_resp
         */
        public amount_jp_req(request: CommonMsg.Iundefined, callback: PoolMsg.msg_pool_service.amount_jp_reqCallback): void;

        /**
         * Calls amount_jp_req.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public amount_jp_req(request: CommonMsg.Iundefined): Promise<PoolMsg.amount_jp_resp>;
    }

    namespace msg_pool_service {

        /**
         * Callback as used by {@link PoolMsg.msg_pool_service#broadcast_jp_req}.
         * @param error Error, if any
         * @param [response] bcast_jp_resp
         */
        type broadcast_jp_reqCallback = (error: (Error | null), response?: PoolMsg.bcast_jp_resp) => void;

        /**
         * Callback as used by {@link PoolMsg.msg_pool_service#amount_jp_req}.
         * @param error Error, if any
         * @param [response] amount_jp_resp
         */
        type amount_jp_reqCallback = (error: (Error | null), response?: PoolMsg.amount_jp_resp) => void;
    }

    /** Properties of an amount_jp_resp. */
    interface Iamount_jp_resp {

        /** amount_jp_resp amount */
        amount: (number | Long);
    }

    /** Represents an amount_jp_resp. */
    class amount_jp_resp implements Iamount_jp_resp {

        /**
         * Constructs a new amount_jp_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PoolMsg.Iamount_jp_resp);

        /** amount_jp_resp amount. */
        public amount: (number | Long);

        /**
         * Creates a new amount_jp_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns amount_jp_resp instance
         */
        public static create(properties?: PoolMsg.Iamount_jp_resp): PoolMsg.amount_jp_resp;

        /**
         * Encodes the specified amount_jp_resp message. Does not implicitly {@link PoolMsg.amount_jp_resp.verify|verify} messages.
         * @param message amount_jp_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PoolMsg.Iamount_jp_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified amount_jp_resp message, length delimited. Does not implicitly {@link PoolMsg.amount_jp_resp.verify|verify} messages.
         * @param message amount_jp_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PoolMsg.Iamount_jp_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an amount_jp_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns amount_jp_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): PoolMsg.amount_jp_resp;

        /**
         * Decodes an amount_jp_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns amount_jp_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): PoolMsg.amount_jp_resp;

        /**
         * Verifies an amount_jp_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bcast_jp_resp. */
    interface Ibcast_jp_resp {

        /** bcast_jp_resp uid */
        uid: (number | Long);

        /** bcast_jp_resp score */
        score: (number | Long);

        /** bcast_jp_resp score_level */
        score_level: number;

        /** bcast_jp_resp content */
        content: CommonMsg.Idmsg;

        /** bcast_jp_resp amount */
        amount: (number | Long);
    }

    /** Represents a bcast_jp_resp. */
    class bcast_jp_resp implements Ibcast_jp_resp {

        /**
         * Constructs a new bcast_jp_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PoolMsg.Ibcast_jp_resp);

        /** bcast_jp_resp uid. */
        public uid: (number | Long);

        /** bcast_jp_resp score. */
        public score: (number | Long);

        /** bcast_jp_resp score_level. */
        public score_level: number;

        /** bcast_jp_resp content. */
        public content: CommonMsg.Idmsg;

        /** bcast_jp_resp amount. */
        public amount: (number | Long);

        /**
         * Creates a new bcast_jp_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bcast_jp_resp instance
         */
        public static create(properties?: PoolMsg.Ibcast_jp_resp): PoolMsg.bcast_jp_resp;

        /**
         * Encodes the specified bcast_jp_resp message. Does not implicitly {@link PoolMsg.bcast_jp_resp.verify|verify} messages.
         * @param message bcast_jp_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PoolMsg.Ibcast_jp_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bcast_jp_resp message, length delimited. Does not implicitly {@link PoolMsg.bcast_jp_resp.verify|verify} messages.
         * @param message bcast_jp_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PoolMsg.Ibcast_jp_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bcast_jp_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bcast_jp_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): PoolMsg.bcast_jp_resp;

        /**
         * Decodes a bcast_jp_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bcast_jp_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): PoolMsg.bcast_jp_resp;

        /**
         * Verifies a bcast_jp_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace RankMsg. */
declare namespace RankMsg {

    /** c_cmd enum. */
    enum c_cmd {
        rank_req = 0,
        rank_total_req = 1,
        rank_resp = 2
    }

    /** rank_type enum. */
    enum rank_type {
        rank_last_week = 1,
        rank_this_week = 2,
        rank_act = 3
    }

    /** Represents a msg_rank_service */
    class msg_rank_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_rank_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_rank_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_rank_service;

        /**
         * Calls rank.
         * @param request rank_req message or plain object
         * @param callback Node-style callback called with the error, if any, and rank_resp
         */
        public rank(request: RankMsg.Irank_req, callback: RankMsg.msg_rank_service.rankCallback): void;

        /**
         * Calls rank.
         * @param request rank_req message or plain object
         * @returns Promise
         */
        public rank(request: RankMsg.Irank_req): Promise<RankMsg.rank_resp>;

        /**
         * Calls rank_total.
         * @param request rank_total_req message or plain object
         * @param callback Node-style callback called with the error, if any, and rank_resp
         */
        public rank_total(request: RankMsg.Irank_total_req, callback: RankMsg.msg_rank_service.rank_totalCallback): void;

        /**
         * Calls rank_total.
         * @param request rank_total_req message or plain object
         * @returns Promise
         */
        public rank_total(request: RankMsg.Irank_total_req): Promise<RankMsg.rank_resp>;
    }

    namespace msg_rank_service {

        /**
         * Callback as used by {@link RankMsg.msg_rank_service#rank}.
         * @param error Error, if any
         * @param [response] rank_resp
         */
        type rankCallback = (error: (Error | null), response?: RankMsg.rank_resp) => void;

        /**
         * Callback as used by {@link RankMsg.msg_rank_service#rank_total}.
         * @param error Error, if any
         * @param [response] rank_resp
         */
        type rank_totalCallback = (error: (Error | null), response?: RankMsg.rank_resp) => void;
    }

    /** Properties of a rank_info. */
    interface Irank_info {

        /** rank_info nickname */
        nickname: string;

        /** rank_info score */
        score: (number | Long);

        /** rank_info chips */
        chips?: (number | Long | null);

        /** rank_info rank */
        rank?: (number | null);
    }

    /** Represents a rank_info. */
    class rank_info implements Irank_info {

        /**
         * Constructs a new rank_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Irank_info);

        /** rank_info nickname. */
        public nickname: string;

        /** rank_info score. */
        public score: (number | Long);

        /** rank_info chips. */
        public chips: (number | Long);

        /** rank_info rank. */
        public rank: number;

        /**
         * Creates a new rank_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rank_info instance
         */
        public static create(properties?: RankMsg.Irank_info): RankMsg.rank_info;

        /**
         * Encodes the specified rank_info message. Does not implicitly {@link RankMsg.rank_info.verify|verify} messages.
         * @param message rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Irank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rank_info message, length delimited. Does not implicitly {@link RankMsg.rank_info.verify|verify} messages.
         * @param message rank_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Irank_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rank_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.rank_info;

        /**
         * Decodes a rank_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rank_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.rank_info;

        /**
         * Verifies a rank_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** act_rank_type enum. */
    enum act_rank_type {
        main_list = 1,
        daily_list = 2,
        race_list = 3
    }

    /** Properties of an act_id. */
    interface Iact_id {

        /** act_id act_uid */
        act_uid: (number | Long);

        /** act_id type */
        type: RankMsg.act_rank_type;

        /** act_id act_race_uid */
        act_race_uid?: (number | Long | null);
    }

    /** Represents an act_id. */
    class act_id implements Iact_id {

        /**
         * Constructs a new act_id.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Iact_id);

        /** act_id act_uid. */
        public act_uid: (number | Long);

        /** act_id type. */
        public type: RankMsg.act_rank_type;

        /** act_id act_race_uid. */
        public act_race_uid: (number | Long);

        /**
         * Creates a new act_id instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_id instance
         */
        public static create(properties?: RankMsg.Iact_id): RankMsg.act_id;

        /**
         * Encodes the specified act_id message. Does not implicitly {@link RankMsg.act_id.verify|verify} messages.
         * @param message act_id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Iact_id, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_id message, length delimited. Does not implicitly {@link RankMsg.act_id.verify|verify} messages.
         * @param message act_id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Iact_id, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_id message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.act_id;

        /**
         * Decodes an act_id message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.act_id;

        /**
         * Verifies an act_id message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a rank_req. */
    interface Irank_req {

        /** rank_req index */
        index: number;

        /** rank_req type */
        type: RankMsg.rank_type;

        /** rank_req uid */
        uid?: (RankMsg.Iact_id | null);
    }

    /** Represents a rank_req. */
    class rank_req implements Irank_req {

        /**
         * Constructs a new rank_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Irank_req);

        /** rank_req index. */
        public index: number;

        /** rank_req type. */
        public type: RankMsg.rank_type;

        /** rank_req uid. */
        public uid?: (RankMsg.Iact_id | null);

        /**
         * Creates a new rank_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rank_req instance
         */
        public static create(properties?: RankMsg.Irank_req): RankMsg.rank_req;

        /**
         * Encodes the specified rank_req message. Does not implicitly {@link RankMsg.rank_req.verify|verify} messages.
         * @param message rank_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Irank_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rank_req message, length delimited. Does not implicitly {@link RankMsg.rank_req.verify|verify} messages.
         * @param message rank_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Irank_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rank_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rank_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.rank_req;

        /**
         * Decodes a rank_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rank_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.rank_req;

        /**
         * Verifies a rank_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a rank_total_req. */
    interface Irank_total_req {

        /** rank_total_req type */
        type: RankMsg.rank_type;

        /** rank_total_req uid */
        uid?: (RankMsg.Iact_id | null);
    }

    /** Represents a rank_total_req. */
    class rank_total_req implements Irank_total_req {

        /**
         * Constructs a new rank_total_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Irank_total_req);

        /** rank_total_req type. */
        public type: RankMsg.rank_type;

        /** rank_total_req uid. */
        public uid?: (RankMsg.Iact_id | null);

        /**
         * Creates a new rank_total_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rank_total_req instance
         */
        public static create(properties?: RankMsg.Irank_total_req): RankMsg.rank_total_req;

        /**
         * Encodes the specified rank_total_req message. Does not implicitly {@link RankMsg.rank_total_req.verify|verify} messages.
         * @param message rank_total_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Irank_total_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rank_total_req message, length delimited. Does not implicitly {@link RankMsg.rank_total_req.verify|verify} messages.
         * @param message rank_total_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Irank_total_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rank_total_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rank_total_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.rank_total_req;

        /**
         * Decodes a rank_total_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rank_total_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.rank_total_req;

        /**
         * Verifies a rank_total_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a rank_resp. */
    interface Irank_resp {

        /** rank_resp role */
        role?: (RankMsg.Irank_info[] | null);

        /** rank_resp self_rank */
        self_rank: number;

        /** rank_resp score */
        score?: (number | Long | null);

        /** rank_resp last_score */
        last_score?: (number | Long | null);

        /** rank_resp role_act */
        role_act?: (RankMsg.Iact_role_info | null);
    }

    /** Represents a rank_resp. */
    class rank_resp implements Irank_resp {

        /**
         * Constructs a new rank_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Irank_resp);

        /** rank_resp role. */
        public role: RankMsg.Irank_info[];

        /** rank_resp self_rank. */
        public self_rank: number;

        /** rank_resp score. */
        public score: (number | Long);

        /** rank_resp last_score. */
        public last_score: (number | Long);

        /** rank_resp role_act. */
        public role_act?: (RankMsg.Iact_role_info | null);

        /**
         * Creates a new rank_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rank_resp instance
         */
        public static create(properties?: RankMsg.Irank_resp): RankMsg.rank_resp;

        /**
         * Encodes the specified rank_resp message. Does not implicitly {@link RankMsg.rank_resp.verify|verify} messages.
         * @param message rank_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Irank_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rank_resp message, length delimited. Does not implicitly {@link RankMsg.rank_resp.verify|verify} messages.
         * @param message rank_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Irank_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rank_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rank_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.rank_resp;

        /**
         * Decodes a rank_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rank_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.rank_resp;

        /**
         * Verifies a rank_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an act_role_info. */
    interface Iact_role_info {

        /** act_role_info self_score */
        self_score: (number | Long);

        /** act_role_info self_reward */
        self_reward: (number | Long);
    }

    /** Represents an act_role_info. */
    class act_role_info implements Iact_role_info {

        /**
         * Constructs a new act_role_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: RankMsg.Iact_role_info);

        /** act_role_info self_score. */
        public self_score: (number | Long);

        /** act_role_info self_reward. */
        public self_reward: (number | Long);

        /**
         * Creates a new act_role_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns act_role_info instance
         */
        public static create(properties?: RankMsg.Iact_role_info): RankMsg.act_role_info;

        /**
         * Encodes the specified act_role_info message. Does not implicitly {@link RankMsg.act_role_info.verify|verify} messages.
         * @param message act_role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RankMsg.Iact_role_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified act_role_info message, length delimited. Does not implicitly {@link RankMsg.act_role_info.verify|verify} messages.
         * @param message act_role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RankMsg.Iact_role_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an act_role_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns act_role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RankMsg.act_role_info;

        /**
         * Decodes an act_role_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns act_role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RankMsg.act_role_info;

        /**
         * Verifies an act_role_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace ReportMsg. */
declare namespace ReportMsg {

    /** c_cmd enum. */
    enum c_cmd {
        detail_report_req = 1,
        detail_report_resp = 2,
        screen_report_req = 3,
        rotate_canvas_req = 4
    }

    /** screen_code enum. */
    enum screen_code {
        PC = 1,
        IOS_WIDTH = 2,
        IOS_HIGHT = 3,
        AND_WIDTH = 4,
        AND_HIGHT = 5,
        OTR_WIGHT = 6,
        ORT_HIGHT = 7
    }

    /** Represents a msg_report_service */
    class msg_report_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_report_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_report_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_report_service;

        /**
         * Calls report_detail.
         * @param request detail_report_req message or plain object
         * @param callback Node-style callback called with the error, if any, and detail_report_resp
         */
        public report_detail(request: ReportMsg.Idetail_report_req, callback: ReportMsg.msg_report_service.report_detailCallback): void;

        /**
         * Calls report_detail.
         * @param request detail_report_req message or plain object
         * @returns Promise
         */
        public report_detail(request: ReportMsg.Idetail_report_req): Promise<ReportMsg.detail_report_resp>;

        /**
         * Calls screen_detail.
         * @param request screen_report_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public screen_detail(request: ReportMsg.Iscreen_report_req, callback: ReportMsg.msg_report_service.screen_detailCallback): void;

        /**
         * Calls screen_detail.
         * @param request screen_report_req message or plain object
         * @returns Promise
         */
        public screen_detail(request: ReportMsg.Iscreen_report_req): Promise<CommonMsg.undefined>;

        /**
         * Calls rotate_canvas.
         * @param request rotate_canvas_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public rotate_canvas(request: ReportMsg.Irotate_canvas_req, callback: ReportMsg.msg_report_service.rotate_canvasCallback): void;

        /**
         * Calls rotate_canvas.
         * @param request rotate_canvas_req message or plain object
         * @returns Promise
         */
        public rotate_canvas(request: ReportMsg.Irotate_canvas_req): Promise<CommonMsg.undefined>;
    }

    namespace msg_report_service {

        /**
         * Callback as used by {@link ReportMsg.msg_report_service#report_detail}.
         * @param error Error, if any
         * @param [response] detail_report_resp
         */
        type report_detailCallback = (error: (Error | null), response?: ReportMsg.detail_report_resp) => void;

        /**
         * Callback as used by {@link ReportMsg.msg_report_service#screen_detail}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type screen_detailCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link ReportMsg.msg_report_service#rotate_canvas}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type rotate_canvasCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;
    }

    /** Properties of a detail_report_info. */
    interface Idetail_report_info {

        /** detail_report_info serial_id */
        serial_id: (number | Long);

        /** detail_report_info fish_id */
        fish_id: (number | Long);

        /** detail_report_info bullet_chips */
        bullet_chips: number;

        /** detail_report_info room_ante */
        room_ante: number;

        /** detail_report_info fish_type */
        fish_type: number;

        /** detail_report_info fish_chips */
        fish_chips: number;

        /** detail_report_info is_dead */
        is_dead: boolean;

        /** detail_report_info fish_price */
        fish_price: number;

        /** detail_report_info time */
        time: number;
    }

    /** Represents a detail_report_info. */
    class detail_report_info implements Idetail_report_info {

        /**
         * Constructs a new detail_report_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReportMsg.Idetail_report_info);

        /** detail_report_info serial_id. */
        public serial_id: (number | Long);

        /** detail_report_info fish_id. */
        public fish_id: (number | Long);

        /** detail_report_info bullet_chips. */
        public bullet_chips: number;

        /** detail_report_info room_ante. */
        public room_ante: number;

        /** detail_report_info fish_type. */
        public fish_type: number;

        /** detail_report_info fish_chips. */
        public fish_chips: number;

        /** detail_report_info is_dead. */
        public is_dead: boolean;

        /** detail_report_info fish_price. */
        public fish_price: number;

        /** detail_report_info time. */
        public time: number;

        /**
         * Creates a new detail_report_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns detail_report_info instance
         */
        public static create(properties?: ReportMsg.Idetail_report_info): ReportMsg.detail_report_info;

        /**
         * Encodes the specified detail_report_info message. Does not implicitly {@link ReportMsg.detail_report_info.verify|verify} messages.
         * @param message detail_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReportMsg.Idetail_report_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified detail_report_info message, length delimited. Does not implicitly {@link ReportMsg.detail_report_info.verify|verify} messages.
         * @param message detail_report_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReportMsg.Idetail_report_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a detail_report_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns detail_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ReportMsg.detail_report_info;

        /**
         * Decodes a detail_report_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns detail_report_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ReportMsg.detail_report_info;

        /**
         * Verifies a detail_report_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a detail_report_req. */
    interface Idetail_report_req {

        /** detail_report_req page */
        page: number;

        /** detail_report_req page_num */
        page_num: number;
    }

    /** Represents a detail_report_req. */
    class detail_report_req implements Idetail_report_req {

        /**
         * Constructs a new detail_report_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReportMsg.Idetail_report_req);

        /** detail_report_req page. */
        public page: number;

        /** detail_report_req page_num. */
        public page_num: number;

        /**
         * Creates a new detail_report_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns detail_report_req instance
         */
        public static create(properties?: ReportMsg.Idetail_report_req): ReportMsg.detail_report_req;

        /**
         * Encodes the specified detail_report_req message. Does not implicitly {@link ReportMsg.detail_report_req.verify|verify} messages.
         * @param message detail_report_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReportMsg.Idetail_report_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified detail_report_req message, length delimited. Does not implicitly {@link ReportMsg.detail_report_req.verify|verify} messages.
         * @param message detail_report_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReportMsg.Idetail_report_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a detail_report_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns detail_report_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ReportMsg.detail_report_req;

        /**
         * Decodes a detail_report_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns detail_report_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ReportMsg.detail_report_req;

        /**
         * Verifies a detail_report_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a detail_report_resp. */
    interface Idetail_report_resp {

        /** detail_report_resp total_bullet_chips */
        total_bullet_chips: (number | Long);

        /** detail_report_resp total_fish_chips */
        total_fish_chips: (number | Long);

        /** detail_report_resp total_fish_price */
        total_fish_price: (number | Long);

        /** detail_report_resp total_page */
        total_page: number;

        /** detail_report_resp info */
        info?: (ReportMsg.Idetail_report_info[] | null);
    }

    /** Represents a detail_report_resp. */
    class detail_report_resp implements Idetail_report_resp {

        /**
         * Constructs a new detail_report_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReportMsg.Idetail_report_resp);

        /** detail_report_resp total_bullet_chips. */
        public total_bullet_chips: (number | Long);

        /** detail_report_resp total_fish_chips. */
        public total_fish_chips: (number | Long);

        /** detail_report_resp total_fish_price. */
        public total_fish_price: (number | Long);

        /** detail_report_resp total_page. */
        public total_page: number;

        /** detail_report_resp info. */
        public info: ReportMsg.Idetail_report_info[];

        /**
         * Creates a new detail_report_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns detail_report_resp instance
         */
        public static create(properties?: ReportMsg.Idetail_report_resp): ReportMsg.detail_report_resp;

        /**
         * Encodes the specified detail_report_resp message. Does not implicitly {@link ReportMsg.detail_report_resp.verify|verify} messages.
         * @param message detail_report_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReportMsg.Idetail_report_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified detail_report_resp message, length delimited. Does not implicitly {@link ReportMsg.detail_report_resp.verify|verify} messages.
         * @param message detail_report_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReportMsg.Idetail_report_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a detail_report_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns detail_report_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ReportMsg.detail_report_resp;

        /**
         * Decodes a detail_report_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns detail_report_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ReportMsg.detail_report_resp;

        /**
         * Verifies a detail_report_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a screen_report_req. */
    interface Iscreen_report_req {

        /** screen_report_req srceen */
        srceen: ReportMsg.screen_code;
    }

    /** Represents a screen_report_req. */
    class screen_report_req implements Iscreen_report_req {

        /**
         * Constructs a new screen_report_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReportMsg.Iscreen_report_req);

        /** screen_report_req srceen. */
        public srceen: ReportMsg.screen_code;

        /**
         * Creates a new screen_report_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns screen_report_req instance
         */
        public static create(properties?: ReportMsg.Iscreen_report_req): ReportMsg.screen_report_req;

        /**
         * Encodes the specified screen_report_req message. Does not implicitly {@link ReportMsg.screen_report_req.verify|verify} messages.
         * @param message screen_report_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReportMsg.Iscreen_report_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified screen_report_req message, length delimited. Does not implicitly {@link ReportMsg.screen_report_req.verify|verify} messages.
         * @param message screen_report_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReportMsg.Iscreen_report_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a screen_report_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns screen_report_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ReportMsg.screen_report_req;

        /**
         * Decodes a screen_report_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns screen_report_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ReportMsg.screen_report_req;

        /**
         * Verifies a screen_report_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a rotate_canvas_req. */
    interface Irotate_canvas_req {

        /** rotate_canvas_req mark */
        mark: number;
    }

    /** Represents a rotate_canvas_req. */
    class rotate_canvas_req implements Irotate_canvas_req {

        /**
         * Constructs a new rotate_canvas_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReportMsg.Irotate_canvas_req);

        /** rotate_canvas_req mark. */
        public mark: number;

        /**
         * Creates a new rotate_canvas_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rotate_canvas_req instance
         */
        public static create(properties?: ReportMsg.Irotate_canvas_req): ReportMsg.rotate_canvas_req;

        /**
         * Encodes the specified rotate_canvas_req message. Does not implicitly {@link ReportMsg.rotate_canvas_req.verify|verify} messages.
         * @param message rotate_canvas_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReportMsg.Irotate_canvas_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rotate_canvas_req message, length delimited. Does not implicitly {@link ReportMsg.rotate_canvas_req.verify|verify} messages.
         * @param message rotate_canvas_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReportMsg.Irotate_canvas_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rotate_canvas_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rotate_canvas_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): ReportMsg.rotate_canvas_req;

        /**
         * Decodes a rotate_canvas_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rotate_canvas_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): ReportMsg.rotate_canvas_req;

        /**
         * Verifies a rotate_canvas_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace RoleInfoMsg. */
declare namespace RoleInfoMsg {

    /** c_cmd enum. */
    enum c_cmd {
        lv_info_req = 0,
        lv_info_resp = 1,
        lv_config_req = 3,
        lv_config_resp = 4,
        lv_notice_resp = 5
    }

    /** Represents a msg_role_info_service */
    class msg_role_info_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_role_info_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_role_info_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_role_info_service;

        /**
         * Calls lv_info.
         * @param request lv_info_req message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_info_resp
         */
        public lv_info(request: RoleInfoMsg.Ilv_info_req, callback: RoleInfoMsg.msg_role_info_service.lv_infoCallback): void;

        /**
         * Calls lv_info.
         * @param request lv_info_req message or plain object
         * @returns Promise
         */
        public lv_info(request: RoleInfoMsg.Ilv_info_req): Promise<RoleInfoMsg.lv_info_resp>;

        /**
         * Calls lv_configs.
         * @param request lv_config_req message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_config_resp
         */
        public lv_configs(request: RoleInfoMsg.Ilv_config_req, callback: RoleInfoMsg.msg_role_info_service.lv_configsCallback): void;

        /**
         * Calls lv_configs.
         * @param request lv_config_req message or plain object
         * @returns Promise
         */
        public lv_configs(request: RoleInfoMsg.Ilv_config_req): Promise<RoleInfoMsg.lv_config_resp>;

        /**
         * Calls lv_notice.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and lv_notice_resp
         */
        public lv_notice(request: CommonMsg.Iundefined, callback: RoleInfoMsg.msg_role_info_service.lv_noticeCallback): void;

        /**
         * Calls lv_notice.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public lv_notice(request: CommonMsg.Iundefined): Promise<RoleInfoMsg.lv_notice_resp>;
    }

    namespace msg_role_info_service {

        /**
         * Callback as used by {@link RoleInfoMsg.msg_role_info_service#lv_info}.
         * @param error Error, if any
         * @param [response] lv_info_resp
         */
        type lv_infoCallback = (error: (Error | null), response?: RoleInfoMsg.lv_info_resp) => void;

        /**
         * Callback as used by {@link RoleInfoMsg.msg_role_info_service#lv_configs}.
         * @param error Error, if any
         * @param [response] lv_config_resp
         */
        type lv_configsCallback = (error: (Error | null), response?: RoleInfoMsg.lv_config_resp) => void;

        /**
         * Callback as used by {@link RoleInfoMsg.msg_role_info_service#lv_notice}.
         * @param error Error, if any
         * @param [response] lv_notice_resp
         */
        type lv_noticeCallback = (error: (Error | null), response?: RoleInfoMsg.lv_notice_resp) => void;
    }

    /** info_op_code enum. */
    enum info_op_code {
        success = 0,
        fail = 1,
        out_of_cash = 2,
        same_nick = 3
    }

    /** Properties of a lv_info_req. */
    interface Ilv_info_req {
    }

    /** Represents a lv_info_req. */
    class lv_info_req implements Ilv_info_req {

        /**
         * Constructs a new lv_info_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_info_req);

        /**
         * Creates a new lv_info_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_info_req instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_info_req): RoleInfoMsg.lv_info_req;

        /**
         * Encodes the specified lv_info_req message. Does not implicitly {@link RoleInfoMsg.lv_info_req.verify|verify} messages.
         * @param message lv_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_info_req message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_info_req.verify|verify} messages.
         * @param message lv_info_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_info_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_info_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_info_req;

        /**
         * Decodes a lv_info_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_info_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_info_req;

        /**
         * Verifies a lv_info_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_info_resp. */
    interface Ilv_info_resp {

        /** lv_info_resp lv */
        lv: number;

        /** lv_info_resp exp */
        exp: (number | Long);

        /** lv_info_resp need_exp */
        need_exp: (number | Long);

        /** lv_info_resp reward_lv */
        reward_lv: number;

        /** lv_info_resp next_reward */
        next_reward: (number | Long);

        /** lv_info_resp total_reward */
        total_reward: (number | Long);

        /** lv_info_resp fund_id */
        fund_id: number;

        /** lv_info_resp next_reward_lv */
        next_reward_lv: number;

        /** lv_info_resp reward */
        reward: (number | Long);

        /** lv_info_resp total_exp */
        total_exp?: (number | Long | null);
    }

    /** Represents a lv_info_resp. */
    class lv_info_resp implements Ilv_info_resp {

        /**
         * Constructs a new lv_info_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_info_resp);

        /** lv_info_resp lv. */
        public lv: number;

        /** lv_info_resp exp. */
        public exp: (number | Long);

        /** lv_info_resp need_exp. */
        public need_exp: (number | Long);

        /** lv_info_resp reward_lv. */
        public reward_lv: number;

        /** lv_info_resp next_reward. */
        public next_reward: (number | Long);

        /** lv_info_resp total_reward. */
        public total_reward: (number | Long);

        /** lv_info_resp fund_id. */
        public fund_id: number;

        /** lv_info_resp next_reward_lv. */
        public next_reward_lv: number;

        /** lv_info_resp reward. */
        public reward: (number | Long);

        /** lv_info_resp total_exp. */
        public total_exp: (number | Long);

        /**
         * Creates a new lv_info_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_info_resp instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_info_resp): RoleInfoMsg.lv_info_resp;

        /**
         * Encodes the specified lv_info_resp message. Does not implicitly {@link RoleInfoMsg.lv_info_resp.verify|verify} messages.
         * @param message lv_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_info_resp message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_info_resp.verify|verify} messages.
         * @param message lv_info_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_info_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_info_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_info_resp;

        /**
         * Decodes a lv_info_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_info_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_info_resp;

        /**
         * Verifies a lv_info_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_config_req. */
    interface Ilv_config_req {

        /** lv_config_req fund_id */
        fund_id: number;
    }

    /** Represents a lv_config_req. */
    class lv_config_req implements Ilv_config_req {

        /**
         * Constructs a new lv_config_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_config_req);

        /** lv_config_req fund_id. */
        public fund_id: number;

        /**
         * Creates a new lv_config_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_config_req instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_config_req): RoleInfoMsg.lv_config_req;

        /**
         * Encodes the specified lv_config_req message. Does not implicitly {@link RoleInfoMsg.lv_config_req.verify|verify} messages.
         * @param message lv_config_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_config_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_config_req message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_config_req.verify|verify} messages.
         * @param message lv_config_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_config_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_config_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_config_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_config_req;

        /**
         * Decodes a lv_config_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_config_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_config_req;

        /**
         * Verifies a lv_config_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_config_resp. */
    interface Ilv_config_resp {

        /** lv_config_resp buy_mark */
        buy_mark: number;

        /** lv_config_resp price */
        price: (number | Long);

        /** lv_config_resp configs */
        configs?: (RoleInfoMsg.Ilv_config[] | null);

        /** lv_config_resp fund_id */
        fund_id?: (number | null);
    }

    /** Represents a lv_config_resp. */
    class lv_config_resp implements Ilv_config_resp {

        /**
         * Constructs a new lv_config_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_config_resp);

        /** lv_config_resp buy_mark. */
        public buy_mark: number;

        /** lv_config_resp price. */
        public price: (number | Long);

        /** lv_config_resp configs. */
        public configs: RoleInfoMsg.Ilv_config[];

        /** lv_config_resp fund_id. */
        public fund_id: number;

        /**
         * Creates a new lv_config_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_config_resp instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_config_resp): RoleInfoMsg.lv_config_resp;

        /**
         * Encodes the specified lv_config_resp message. Does not implicitly {@link RoleInfoMsg.lv_config_resp.verify|verify} messages.
         * @param message lv_config_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_config_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_config_resp message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_config_resp.verify|verify} messages.
         * @param message lv_config_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_config_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_config_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_config_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_config_resp;

        /**
         * Decodes a lv_config_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_config_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_config_resp;

        /**
         * Verifies a lv_config_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_config. */
    interface Ilv_config {

        /** lv_config lv */
        lv: number;

        /** lv_config exp */
        exp: (number | Long);

        /** lv_config award */
        award: (number | Long);
    }

    /** Represents a lv_config. */
    class lv_config implements Ilv_config {

        /**
         * Constructs a new lv_config.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_config);

        /** lv_config lv. */
        public lv: number;

        /** lv_config exp. */
        public exp: (number | Long);

        /** lv_config award. */
        public award: (number | Long);

        /**
         * Creates a new lv_config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_config instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_config): RoleInfoMsg.lv_config;

        /**
         * Encodes the specified lv_config message. Does not implicitly {@link RoleInfoMsg.lv_config.verify|verify} messages.
         * @param message lv_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_config message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_config.verify|verify} messages.
         * @param message lv_config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_config, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_config;

        /**
         * Decodes a lv_config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_config;

        /**
         * Verifies a lv_config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a lv_notice_resp. */
    interface Ilv_notice_resp {

        /** lv_notice_resp old_lv */
        old_lv: number;

        /** lv_notice_resp new_lv */
        new_lv: number;

        /** lv_notice_resp uid */
        uid: (number | Long);
    }

    /** Represents a lv_notice_resp. */
    class lv_notice_resp implements Ilv_notice_resp {

        /**
         * Constructs a new lv_notice_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoleInfoMsg.Ilv_notice_resp);

        /** lv_notice_resp old_lv. */
        public old_lv: number;

        /** lv_notice_resp new_lv. */
        public new_lv: number;

        /** lv_notice_resp uid. */
        public uid: (number | Long);

        /**
         * Creates a new lv_notice_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lv_notice_resp instance
         */
        public static create(properties?: RoleInfoMsg.Ilv_notice_resp): RoleInfoMsg.lv_notice_resp;

        /**
         * Encodes the specified lv_notice_resp message. Does not implicitly {@link RoleInfoMsg.lv_notice_resp.verify|verify} messages.
         * @param message lv_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoleInfoMsg.Ilv_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified lv_notice_resp message, length delimited. Does not implicitly {@link RoleInfoMsg.lv_notice_resp.verify|verify} messages.
         * @param message lv_notice_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoleInfoMsg.Ilv_notice_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a lv_notice_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lv_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoleInfoMsg.lv_notice_resp;

        /**
         * Decodes a lv_notice_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lv_notice_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoleInfoMsg.lv_notice_resp;

        /**
         * Verifies a lv_notice_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace RoomMsg. */
declare namespace RoomMsg {

    /** c_cmd enum. */
    enum c_cmd {
        enter_room_req = 0,
        enter_room_resp = 1,
        ready_room_req = 2,
        ready_room_resp = 3,
        syn_seat_req = 4,
        syn_fish_resp = 5,
        hit_fish_req = 6,
        hit_fish_resp = 7,
        shoot_bullet_req = 8,
        shoot_bullet_resp = 9,
        change_battery_req = 10,
        change_battery_resp = 11,
        leave_room_req = 12,
        update_fish_resp = 13,
        fish_dead_resp = 14,
        leave_room_resp = 15,
        update_chips_resp = 16,
        shoot_err_resp = 17,
        battery_err_resp = 18,
        sync_chips_rep = 19,
        sync_chips_resp = 20,
        room_status_resp = 21,
        syn_role_resp = 22,
        novice_prompt_req = 23,
        bullet_useless_req = 24,
        bullet_useless_resp = 25,
        bullet_pass_resp = 26,
        sync_jp_jetton_resp = 27,
        fish_matrix_resp = 28,
        clean_wave_resp = 29,
        one_piece_resp = 30,
        hit_result_resp = 31,
        extra_reward_req = 32,
        extra_reward_resp = 33,
        wave_matrix_resp = 34,
        mq_sync_chips_resp = 35,
        fish_select_save_req = 36,
        fish_select_save_resp = 37,
        fish_select_req = 38,
        fish_select_resp = 39,
        update_valentine_score = 40,
        rotate_canvas_resp = 41,
        weapon_chip_resp = 42
    }

    /** msg_room_code enum. */
    enum msg_room_code {
        SUCCESS_ENTER = 1,
        FALSE_ENTER = 2,
        ERR_BARBETTE = 3,
        ERR_CHIPS = 4,
        LOW_CHIPS = 5,
        HIGH_CHIPS = 6,
        UNFROZEN = 7,
        RELOGIN_NORMAL = 8,
        RELOGIN_RECONNECT = 9,
        ERR_HIT_REQ = 10,
        ERR_SUMMON_ROLE = 11,
        ERR_SUMMON = 12,
        FROZEN = 13,
        RACE_OUT_TIME = 14,
        TOO_MUCH_TRY = 15,
        LOCK_CHARID = 16
    }

    /** msg_fish_save_code enum. */
    enum msg_fish_save_code {
        SUCCESS = 1,
        FALSE = 2
    }

    /** msg_special_code enum. */
    enum msg_special_code {
        NOEMAL = 0,
        ALTAIR = 1,
        VEGA = 2,
        AWARD = 3
    }

    /** Represents a msg_room_service */
    class msg_room_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_room_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_room_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_room_service;

        /**
         * Calls enter_room.
         * @param request enter_room_req message or plain object
         * @param callback Node-style callback called with the error, if any, and enter_room_resp
         */
        public enter_room(request: RoomMsg.Ienter_room_req, callback: RoomMsg.msg_room_service.enter_roomCallback): void;

        /**
         * Calls enter_room.
         * @param request enter_room_req message or plain object
         * @returns Promise
         */
        public enter_room(request: RoomMsg.Ienter_room_req): Promise<RoomMsg.enter_room_resp>;

        /**
         * Calls ready_room.
         * @param request ready_room_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public ready_room(request: RoomMsg.Iready_room_req, callback: RoomMsg.msg_room_service.ready_roomCallback): void;

        /**
         * Calls ready_room.
         * @param request ready_room_req message or plain object
         * @returns Promise
         */
        public ready_room(request: RoomMsg.Iready_room_req): Promise<CommonMsg.undefined>;

        /**
         * Calls other_ready_room.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and ready_room_resp
         */
        public other_ready_room(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.other_ready_roomCallback): void;

        /**
         * Calls other_ready_room.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public other_ready_room(request: CommonMsg.Iundefined): Promise<RoomMsg.ready_room_resp>;

        /**
         * Calls syn_seat.
         * @param request syn_seat_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public syn_seat(request: RoomMsg.Isyn_seat_req, callback: RoomMsg.msg_room_service.syn_seatCallback): void;

        /**
         * Calls syn_seat.
         * @param request syn_seat_req message or plain object
         * @returns Promise
         */
        public syn_seat(request: RoomMsg.Isyn_seat_req): Promise<CommonMsg.undefined>;

        /**
         * Calls syn_fish.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and syn_fish_resp
         */
        public syn_fish(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.syn_fishCallback): void;

        /**
         * Calls syn_fish.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public syn_fish(request: CommonMsg.Iundefined): Promise<RoomMsg.syn_fish_resp>;

        /**
         * Calls hit_fish.
         * @param request hit_fish_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public hit_fish(request: RoomMsg.Ihit_fish_req, callback: RoomMsg.msg_room_service.hit_fishCallback): void;

        /**
         * Calls hit_fish.
         * @param request hit_fish_req message or plain object
         * @returns Promise
         */
        public hit_fish(request: RoomMsg.Ihit_fish_req): Promise<CommonMsg.undefined>;

        /**
         * Calls other_hit_fish.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and hit_fish_resp
         */
        public other_hit_fish(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.other_hit_fishCallback): void;

        /**
         * Calls other_hit_fish.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public other_hit_fish(request: CommonMsg.Iundefined): Promise<RoomMsg.hit_fish_resp>;

        /**
         * Calls fish_dead.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and fish_dead_resp
         */
        public fish_dead(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.fish_deadCallback): void;

        /**
         * Calls fish_dead.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public fish_dead(request: CommonMsg.Iundefined): Promise<RoomMsg.fish_dead_resp>;

        /**
         * Calls create_fish.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and update_fish_resp
         */
        public create_fish(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.create_fishCallback): void;

        /**
         * Calls create_fish.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public create_fish(request: CommonMsg.Iundefined): Promise<RoomMsg.update_fish_resp>;

        /**
         * Calls shoot_bullet.
         * @param request shoot_bullet_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public shoot_bullet(request: RoomMsg.Ishoot_bullet_req, callback: RoomMsg.msg_room_service.shoot_bulletCallback): void;

        /**
         * Calls shoot_bullet.
         * @param request shoot_bullet_req message or plain object
         * @returns Promise
         */
        public shoot_bullet(request: RoomMsg.Ishoot_bullet_req): Promise<CommonMsg.undefined>;

        /**
         * Calls sync_bullet.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and shoot_bullet_resp
         */
        public sync_bullet(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.sync_bulletCallback): void;

        /**
         * Calls sync_bullet.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public sync_bullet(request: CommonMsg.Iundefined): Promise<RoomMsg.shoot_bullet_resp>;

        /**
         * Calls change_battery.
         * @param request change_battery_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public change_battery(request: RoomMsg.Ichange_battery_req, callback: RoomMsg.msg_room_service.change_batteryCallback): void;

        /**
         * Calls change_battery.
         * @param request change_battery_req message or plain object
         * @returns Promise
         */
        public change_battery(request: RoomMsg.Ichange_battery_req): Promise<CommonMsg.undefined>;

        /**
         * Calls change_battery_resp.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and change_battery_resp
         */
        public change_battery_resp(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.change_battery_respCallback): void;

        /**
         * Calls change_battery_resp.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public change_battery_resp(request: CommonMsg.Iundefined): Promise<RoomMsg.change_battery_resp>;

        /**
         * Calls leave_room.
         * @param request leave_room_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public leave_room(request: RoomMsg.Ileave_room_req, callback: RoomMsg.msg_room_service.leave_roomCallback): void;

        /**
         * Calls leave_room.
         * @param request leave_room_req message or plain object
         * @returns Promise
         */
        public leave_room(request: RoomMsg.Ileave_room_req): Promise<CommonMsg.undefined>;

        /**
         * Calls leave_room_resp.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and leave_room_resp
         */
        public leave_room_resp(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.leave_room_respCallback): void;

        /**
         * Calls leave_room_resp.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public leave_room_resp(request: CommonMsg.Iundefined): Promise<RoomMsg.leave_room_resp>;

        /**
         * Calls update_chips.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and update_chips_resp
         */
        public update_chips(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.update_chipsCallback): void;

        /**
         * Calls update_chips.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public update_chips(request: CommonMsg.Iundefined): Promise<RoomMsg.update_chips_resp>;

        /**
         * Calls shoot_err.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and shoot_err_resp
         */
        public shoot_err(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.shoot_errCallback): void;

        /**
         * Calls shoot_err.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public shoot_err(request: CommonMsg.Iundefined): Promise<RoomMsg.shoot_err_resp>;

        /**
         * Calls battery_err.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and battery_err_resp
         */
        public battery_err(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.battery_errCallback): void;

        /**
         * Calls battery_err.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public battery_err(request: CommonMsg.Iundefined): Promise<RoomMsg.battery_err_resp>;

        /**
         * Calls sync_chips.
         * @param request sync_chips_rep message or plain object
         * @param callback Node-style callback called with the error, if any, and sync_chips_resp
         */
        public sync_chips(request: RoomMsg.Isync_chips_rep, callback: RoomMsg.msg_room_service.sync_chipsCallback): void;

        /**
         * Calls sync_chips.
         * @param request sync_chips_rep message or plain object
         * @returns Promise
         */
        public sync_chips(request: RoomMsg.Isync_chips_rep): Promise<RoomMsg.sync_chips_resp>;

        /**
         * Calls mq_sync_chips.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and mq_sync_chips_resp
         */
        public mq_sync_chips(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.mq_sync_chipsCallback): void;

        /**
         * Calls mq_sync_chips.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public mq_sync_chips(request: CommonMsg.Iundefined): Promise<RoomMsg.mq_sync_chips_resp>;

        /**
         * Calls room_status.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and room_status_resp
         */
        public room_status(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.room_statusCallback): void;

        /**
         * Calls room_status.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public room_status(request: CommonMsg.Iundefined): Promise<RoomMsg.room_status_resp>;

        /**
         * Calls syn_role.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and syn_role_resp
         */
        public syn_role(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.syn_roleCallback): void;

        /**
         * Calls syn_role.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public syn_role(request: CommonMsg.Iundefined): Promise<RoomMsg.syn_role_resp>;

        /**
         * Calls novice_prompt.
         * @param request novice_prompt_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public novice_prompt(request: RoomMsg.Inovice_prompt_req, callback: RoomMsg.msg_room_service.novice_promptCallback): void;

        /**
         * Calls novice_prompt.
         * @param request novice_prompt_req message or plain object
         * @returns Promise
         */
        public novice_prompt(request: RoomMsg.Inovice_prompt_req): Promise<CommonMsg.undefined>;

        /**
         * Calls sync_useless_bullet.
         * @param request bullet_useless_req message or plain object
         * @param callback Node-style callback called with the error, if any, and undefined
         */
        public sync_useless_bullet(request: RoomMsg.Ibullet_useless_req, callback: RoomMsg.msg_room_service.sync_useless_bulletCallback): void;

        /**
         * Calls sync_useless_bullet.
         * @param request bullet_useless_req message or plain object
         * @returns Promise
         */
        public sync_useless_bullet(request: RoomMsg.Ibullet_useless_req): Promise<CommonMsg.undefined>;

        /**
         * Calls sync_useless_bullet_resp.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bullet_useless_resp
         */
        public sync_useless_bullet_resp(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.sync_useless_bullet_respCallback): void;

        /**
         * Calls sync_useless_bullet_resp.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public sync_useless_bullet_resp(request: CommonMsg.Iundefined): Promise<RoomMsg.bullet_useless_resp>;

        /**
         * Calls pass_bullet_resp.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and bullet_pass_resp
         */
        public pass_bullet_resp(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.pass_bullet_respCallback): void;

        /**
         * Calls pass_bullet_resp.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public pass_bullet_resp(request: CommonMsg.Iundefined): Promise<RoomMsg.bullet_pass_resp>;

        /**
         * Calls jp_jetton_resp.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and sync_jp_jetton_resp
         */
        public jp_jetton_resp(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.jp_jetton_respCallback): void;

        /**
         * Calls jp_jetton_resp.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public jp_jetton_resp(request: CommonMsg.Iundefined): Promise<RoomMsg.sync_jp_jetton_resp>;

        /**
         * Calls fish_matrix.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and fish_matrix_resp
         */
        public fish_matrix(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.fish_matrixCallback): void;

        /**
         * Calls fish_matrix.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public fish_matrix(request: CommonMsg.Iundefined): Promise<RoomMsg.fish_matrix_resp>;

        /**
         * Calls fish_wave_matrix.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and wave_matrix_resp
         */
        public fish_wave_matrix(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.fish_wave_matrixCallback): void;

        /**
         * Calls fish_wave_matrix.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public fish_wave_matrix(request: CommonMsg.Iundefined): Promise<RoomMsg.wave_matrix_resp>;

        /**
         * Calls clean_wave.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and clean_wave_resp
         */
        public clean_wave(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.clean_waveCallback): void;

        /**
         * Calls clean_wave.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public clean_wave(request: CommonMsg.Iundefined): Promise<RoomMsg.clean_wave_resp>;

        /**
         * Calls hit_result.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and hit_result_resp
         */
        public hit_result(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.hit_resultCallback): void;

        /**
         * Calls hit_result.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public hit_result(request: CommonMsg.Iundefined): Promise<RoomMsg.hit_result_resp>;

        /**
         * Calls extra_reward.
         * @param request extra_reward_req message or plain object
         * @param callback Node-style callback called with the error, if any, and extra_reward_resp
         */
        public extra_reward(request: RoomMsg.Iextra_reward_req, callback: RoomMsg.msg_room_service.extra_rewardCallback): void;

        /**
         * Calls extra_reward.
         * @param request extra_reward_req message or plain object
         * @returns Promise
         */
        public extra_reward(request: RoomMsg.Iextra_reward_req): Promise<RoomMsg.extra_reward_resp>;

        /**
         * Calls save_fish_set.
         * @param request fish_select_save_req message or plain object
         * @param callback Node-style callback called with the error, if any, and fish_select_save_resp
         */
        public save_fish_set(request: RoomMsg.Ifish_select_save_req, callback: RoomMsg.msg_room_service.save_fish_setCallback): void;

        /**
         * Calls save_fish_set.
         * @param request fish_select_save_req message or plain object
         * @returns Promise
         */
        public save_fish_set(request: RoomMsg.Ifish_select_save_req): Promise<RoomMsg.fish_select_save_resp>;

        /**
         * Calls get_fish_set.
         * @param request fish_select_req message or plain object
         * @param callback Node-style callback called with the error, if any, and fish_select_resp
         */
        public get_fish_set(request: RoomMsg.Ifish_select_req, callback: RoomMsg.msg_room_service.get_fish_setCallback): void;

        /**
         * Calls get_fish_set.
         * @param request fish_select_req message or plain object
         * @returns Promise
         */
        public get_fish_set(request: RoomMsg.Ifish_select_req): Promise<RoomMsg.fish_select_resp>;

        /**
         * Calls valentine_score.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and update_valentine_score
         */
        public valentine_score(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.valentine_scoreCallback): void;

        /**
         * Calls valentine_score.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public valentine_score(request: CommonMsg.Iundefined): Promise<RoomMsg.update_valentine_score>;

        /**
         * Calls rotate_canvas_broadcast.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and rotate_canvas_resp
         */
        public rotate_canvas_broadcast(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.rotate_canvas_broadcastCallback): void;

        /**
         * Calls rotate_canvas_broadcast.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public rotate_canvas_broadcast(request: CommonMsg.Iundefined): Promise<RoomMsg.rotate_canvas_resp>;

        /**
         * Calls weapon_chip.
         * @param request undefined message or plain object
         * @param callback Node-style callback called with the error, if any, and weapon_chip_resp
         */
        public weapon_chip(request: CommonMsg.Iundefined, callback: RoomMsg.msg_room_service.weapon_chipCallback): void;

        /**
         * Calls weapon_chip.
         * @param request undefined message or plain object
         * @returns Promise
         */
        public weapon_chip(request: CommonMsg.Iundefined): Promise<RoomMsg.weapon_chip_resp>;
    }

    namespace msg_room_service {

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#enter_room}.
         * @param error Error, if any
         * @param [response] enter_room_resp
         */
        type enter_roomCallback = (error: (Error | null), response?: RoomMsg.enter_room_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#ready_room}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type ready_roomCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#other_ready_room}.
         * @param error Error, if any
         * @param [response] ready_room_resp
         */
        type other_ready_roomCallback = (error: (Error | null), response?: RoomMsg.ready_room_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#syn_seat}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type syn_seatCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#syn_fish}.
         * @param error Error, if any
         * @param [response] syn_fish_resp
         */
        type syn_fishCallback = (error: (Error | null), response?: RoomMsg.syn_fish_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#hit_fish}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type hit_fishCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#other_hit_fish}.
         * @param error Error, if any
         * @param [response] hit_fish_resp
         */
        type other_hit_fishCallback = (error: (Error | null), response?: RoomMsg.hit_fish_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#fish_dead}.
         * @param error Error, if any
         * @param [response] fish_dead_resp
         */
        type fish_deadCallback = (error: (Error | null), response?: RoomMsg.fish_dead_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#create_fish}.
         * @param error Error, if any
         * @param [response] update_fish_resp
         */
        type create_fishCallback = (error: (Error | null), response?: RoomMsg.update_fish_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#shoot_bullet}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type shoot_bulletCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#sync_bullet}.
         * @param error Error, if any
         * @param [response] shoot_bullet_resp
         */
        type sync_bulletCallback = (error: (Error | null), response?: RoomMsg.shoot_bullet_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#change_battery}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type change_batteryCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#change_battery_resp}.
         * @param error Error, if any
         * @param [response] change_battery_resp
         */
        type change_battery_respCallback = (error: (Error | null), response?: RoomMsg.change_battery_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#leave_room}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type leave_roomCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#leave_room_resp}.
         * @param error Error, if any
         * @param [response] leave_room_resp
         */
        type leave_room_respCallback = (error: (Error | null), response?: RoomMsg.leave_room_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#update_chips}.
         * @param error Error, if any
         * @param [response] update_chips_resp
         */
        type update_chipsCallback = (error: (Error | null), response?: RoomMsg.update_chips_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#shoot_err}.
         * @param error Error, if any
         * @param [response] shoot_err_resp
         */
        type shoot_errCallback = (error: (Error | null), response?: RoomMsg.shoot_err_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#battery_err}.
         * @param error Error, if any
         * @param [response] battery_err_resp
         */
        type battery_errCallback = (error: (Error | null), response?: RoomMsg.battery_err_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#sync_chips}.
         * @param error Error, if any
         * @param [response] sync_chips_resp
         */
        type sync_chipsCallback = (error: (Error | null), response?: RoomMsg.sync_chips_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#mq_sync_chips}.
         * @param error Error, if any
         * @param [response] mq_sync_chips_resp
         */
        type mq_sync_chipsCallback = (error: (Error | null), response?: RoomMsg.mq_sync_chips_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#room_status}.
         * @param error Error, if any
         * @param [response] room_status_resp
         */
        type room_statusCallback = (error: (Error | null), response?: RoomMsg.room_status_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#syn_role}.
         * @param error Error, if any
         * @param [response] syn_role_resp
         */
        type syn_roleCallback = (error: (Error | null), response?: RoomMsg.syn_role_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#novice_prompt}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type novice_promptCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#sync_useless_bullet}.
         * @param error Error, if any
         * @param [response] undefined
         */
        type sync_useless_bulletCallback = (error: (Error | null), response?: CommonMsg.undefined) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#sync_useless_bullet_resp}.
         * @param error Error, if any
         * @param [response] bullet_useless_resp
         */
        type sync_useless_bullet_respCallback = (error: (Error | null), response?: RoomMsg.bullet_useless_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#pass_bullet_resp}.
         * @param error Error, if any
         * @param [response] bullet_pass_resp
         */
        type pass_bullet_respCallback = (error: (Error | null), response?: RoomMsg.bullet_pass_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#jp_jetton_resp}.
         * @param error Error, if any
         * @param [response] sync_jp_jetton_resp
         */
        type jp_jetton_respCallback = (error: (Error | null), response?: RoomMsg.sync_jp_jetton_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#fish_matrix}.
         * @param error Error, if any
         * @param [response] fish_matrix_resp
         */
        type fish_matrixCallback = (error: (Error | null), response?: RoomMsg.fish_matrix_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#fish_wave_matrix}.
         * @param error Error, if any
         * @param [response] wave_matrix_resp
         */
        type fish_wave_matrixCallback = (error: (Error | null), response?: RoomMsg.wave_matrix_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#clean_wave}.
         * @param error Error, if any
         * @param [response] clean_wave_resp
         */
        type clean_waveCallback = (error: (Error | null), response?: RoomMsg.clean_wave_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#hit_result}.
         * @param error Error, if any
         * @param [response] hit_result_resp
         */
        type hit_resultCallback = (error: (Error | null), response?: RoomMsg.hit_result_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#extra_reward}.
         * @param error Error, if any
         * @param [response] extra_reward_resp
         */
        type extra_rewardCallback = (error: (Error | null), response?: RoomMsg.extra_reward_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#save_fish_set}.
         * @param error Error, if any
         * @param [response] fish_select_save_resp
         */
        type save_fish_setCallback = (error: (Error | null), response?: RoomMsg.fish_select_save_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#get_fish_set}.
         * @param error Error, if any
         * @param [response] fish_select_resp
         */
        type get_fish_setCallback = (error: (Error | null), response?: RoomMsg.fish_select_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#valentine_score}.
         * @param error Error, if any
         * @param [response] update_valentine_score
         */
        type valentine_scoreCallback = (error: (Error | null), response?: RoomMsg.update_valentine_score) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#rotate_canvas_broadcast}.
         * @param error Error, if any
         * @param [response] rotate_canvas_resp
         */
        type rotate_canvas_broadcastCallback = (error: (Error | null), response?: RoomMsg.rotate_canvas_resp) => void;

        /**
         * Callback as used by {@link RoomMsg.msg_room_service#weapon_chip}.
         * @param error Error, if any
         * @param [response] weapon_chip_resp
         */
        type weapon_chipCallback = (error: (Error | null), response?: RoomMsg.weapon_chip_resp) => void;
    }

    /** Properties of an enter_room_req. */
    interface Ienter_room_req {

        /** enter_room_req type */
        type: CommonMsg.room_type;

        /** enter_room_req code */
        code: RoleMsg.msg_relogin_code;

        /** enter_room_req race_id */
        race_id?: (number | null);

        /** enter_room_req uid */
        uid?: (number | Long | null);

        /** enter_room_req select_role */
        select_role?: (number | null);
    }

    /** Represents an enter_room_req. */
    class enter_room_req implements Ienter_room_req {

        /**
         * Constructs a new enter_room_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ienter_room_req);

        /** enter_room_req type. */
        public type: CommonMsg.room_type;

        /** enter_room_req code. */
        public code: RoleMsg.msg_relogin_code;

        /** enter_room_req race_id. */
        public race_id: number;

        /** enter_room_req uid. */
        public uid: (number | Long);

        /** enter_room_req select_role. */
        public select_role: number;

        /**
         * Creates a new enter_room_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns enter_room_req instance
         */
        public static create(properties?: RoomMsg.Ienter_room_req): RoomMsg.enter_room_req;

        /**
         * Encodes the specified enter_room_req message. Does not implicitly {@link RoomMsg.enter_room_req.verify|verify} messages.
         * @param message enter_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ienter_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified enter_room_req message, length delimited. Does not implicitly {@link RoomMsg.enter_room_req.verify|verify} messages.
         * @param message enter_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ienter_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an enter_room_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns enter_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.enter_room_req;

        /**
         * Decodes an enter_room_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns enter_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.enter_room_req;

        /**
         * Verifies an enter_room_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an enter_room_resp. */
    interface Ienter_room_resp {

        /** enter_room_resp code */
        code: RoomMsg.msg_room_code;

        /** enter_room_resp game_id */
        game_id?: (number | null);
    }

    /** Represents an enter_room_resp. */
    class enter_room_resp implements Ienter_room_resp {

        /**
         * Constructs a new enter_room_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ienter_room_resp);

        /** enter_room_resp code. */
        public code: RoomMsg.msg_room_code;

        /** enter_room_resp game_id. */
        public game_id: number;

        /**
         * Creates a new enter_room_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns enter_room_resp instance
         */
        public static create(properties?: RoomMsg.Ienter_room_resp): RoomMsg.enter_room_resp;

        /**
         * Encodes the specified enter_room_resp message. Does not implicitly {@link RoomMsg.enter_room_resp.verify|verify} messages.
         * @param message enter_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ienter_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified enter_room_resp message, length delimited. Does not implicitly {@link RoomMsg.enter_room_resp.verify|verify} messages.
         * @param message enter_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ienter_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an enter_room_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns enter_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.enter_room_resp;

        /**
         * Decodes an enter_room_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns enter_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.enter_room_resp;

        /**
         * Verifies an enter_room_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a ready_room_req. */
    interface Iready_room_req {
    }

    /** Represents a ready_room_req. */
    class ready_room_req implements Iready_room_req {

        /**
         * Constructs a new ready_room_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iready_room_req);

        /**
         * Creates a new ready_room_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ready_room_req instance
         */
        public static create(properties?: RoomMsg.Iready_room_req): RoomMsg.ready_room_req;

        /**
         * Encodes the specified ready_room_req message. Does not implicitly {@link RoomMsg.ready_room_req.verify|verify} messages.
         * @param message ready_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iready_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ready_room_req message, length delimited. Does not implicitly {@link RoomMsg.ready_room_req.verify|verify} messages.
         * @param message ready_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iready_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ready_room_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ready_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.ready_room_req;

        /**
         * Decodes a ready_room_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ready_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.ready_room_req;

        /**
         * Verifies a ready_room_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a ready_room_resp. */
    interface Iready_room_resp {

        /** ready_room_resp role */
        role?: (RoomMsg.Iroom_role_info[] | null);
    }

    /** Represents a ready_room_resp. */
    class ready_room_resp implements Iready_room_resp {

        /**
         * Constructs a new ready_room_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iready_room_resp);

        /** ready_room_resp role. */
        public role: RoomMsg.Iroom_role_info[];

        /**
         * Creates a new ready_room_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ready_room_resp instance
         */
        public static create(properties?: RoomMsg.Iready_room_resp): RoomMsg.ready_room_resp;

        /**
         * Encodes the specified ready_room_resp message. Does not implicitly {@link RoomMsg.ready_room_resp.verify|verify} messages.
         * @param message ready_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iready_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ready_room_resp message, length delimited. Does not implicitly {@link RoomMsg.ready_room_resp.verify|verify} messages.
         * @param message ready_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iready_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ready_room_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ready_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.ready_room_resp;

        /**
         * Decodes a ready_room_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ready_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.ready_room_resp;

        /**
         * Verifies a ready_room_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a syn_role_resp. */
    interface Isyn_role_resp {

        /** syn_role_resp role */
        role?: (RoomMsg.Iroom_role_info[] | null);
    }

    /** Represents a syn_role_resp. */
    class syn_role_resp implements Isyn_role_resp {

        /**
         * Constructs a new syn_role_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isyn_role_resp);

        /** syn_role_resp role. */
        public role: RoomMsg.Iroom_role_info[];

        /**
         * Creates a new syn_role_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns syn_role_resp instance
         */
        public static create(properties?: RoomMsg.Isyn_role_resp): RoomMsg.syn_role_resp;

        /**
         * Encodes the specified syn_role_resp message. Does not implicitly {@link RoomMsg.syn_role_resp.verify|verify} messages.
         * @param message syn_role_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isyn_role_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified syn_role_resp message, length delimited. Does not implicitly {@link RoomMsg.syn_role_resp.verify|verify} messages.
         * @param message syn_role_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isyn_role_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a syn_role_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns syn_role_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.syn_role_resp;

        /**
         * Decodes a syn_role_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns syn_role_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.syn_role_resp;

        /**
         * Verifies a syn_role_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a syn_seat_req. */
    interface Isyn_seat_req {
    }

    /** Represents a syn_seat_req. */
    class syn_seat_req implements Isyn_seat_req {

        /**
         * Constructs a new syn_seat_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isyn_seat_req);

        /**
         * Creates a new syn_seat_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns syn_seat_req instance
         */
        public static create(properties?: RoomMsg.Isyn_seat_req): RoomMsg.syn_seat_req;

        /**
         * Encodes the specified syn_seat_req message. Does not implicitly {@link RoomMsg.syn_seat_req.verify|verify} messages.
         * @param message syn_seat_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isyn_seat_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified syn_seat_req message, length delimited. Does not implicitly {@link RoomMsg.syn_seat_req.verify|verify} messages.
         * @param message syn_seat_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isyn_seat_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a syn_seat_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns syn_seat_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.syn_seat_req;

        /**
         * Decodes a syn_seat_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns syn_seat_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.syn_seat_req;

        /**
         * Verifies a syn_seat_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a room_status_resp. */
    interface Iroom_status_resp {

        /** room_status_resp status */
        status: RoomMsg.msg_room_code;

        /** room_status_resp fish_list */
        fish_list?: (RoomMsg.Iupdate_fish_resp[] | null);

        /** room_status_resp matrix_fztime_ms */
        matrix_fztime_ms?: (number | Long | null);
    }

    /** Represents a room_status_resp. */
    class room_status_resp implements Iroom_status_resp {

        /**
         * Constructs a new room_status_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iroom_status_resp);

        /** room_status_resp status. */
        public status: RoomMsg.msg_room_code;

        /** room_status_resp fish_list. */
        public fish_list: RoomMsg.Iupdate_fish_resp[];

        /** room_status_resp matrix_fztime_ms. */
        public matrix_fztime_ms: (number | Long);

        /**
         * Creates a new room_status_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns room_status_resp instance
         */
        public static create(properties?: RoomMsg.Iroom_status_resp): RoomMsg.room_status_resp;

        /**
         * Encodes the specified room_status_resp message. Does not implicitly {@link RoomMsg.room_status_resp.verify|verify} messages.
         * @param message room_status_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iroom_status_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified room_status_resp message, length delimited. Does not implicitly {@link RoomMsg.room_status_resp.verify|verify} messages.
         * @param message room_status_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iroom_status_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a room_status_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns room_status_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.room_status_resp;

        /**
         * Decodes a room_status_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns room_status_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.room_status_resp;

        /**
         * Verifies a room_status_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a syn_fish_resp. */
    interface Isyn_fish_resp {

        /** syn_fish_resp fish_list */
        fish_list?: (RoomMsg.Iupdate_fish_resp[] | null);
    }

    /** Represents a syn_fish_resp. */
    class syn_fish_resp implements Isyn_fish_resp {

        /**
         * Constructs a new syn_fish_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isyn_fish_resp);

        /** syn_fish_resp fish_list. */
        public fish_list: RoomMsg.Iupdate_fish_resp[];

        /**
         * Creates a new syn_fish_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns syn_fish_resp instance
         */
        public static create(properties?: RoomMsg.Isyn_fish_resp): RoomMsg.syn_fish_resp;

        /**
         * Encodes the specified syn_fish_resp message. Does not implicitly {@link RoomMsg.syn_fish_resp.verify|verify} messages.
         * @param message syn_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isyn_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified syn_fish_resp message, length delimited. Does not implicitly {@link RoomMsg.syn_fish_resp.verify|verify} messages.
         * @param message syn_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isyn_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a syn_fish_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns syn_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.syn_fish_resp;

        /**
         * Decodes a syn_fish_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns syn_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.syn_fish_resp;

        /**
         * Verifies a syn_fish_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an update_fish_resp. */
    interface Iupdate_fish_resp {

        /** update_fish_resp type */
        type: number;

        /** update_fish_resp id */
        id: (number | Long);

        /** update_fish_resp path_id */
        path_id: number;

        /** update_fish_resp create_time_ms */
        create_time_ms?: (number | Long | null);

        /** update_fish_resp frozen_time_ms */
        frozen_time_ms?: (number | Long | null);

        /** update_fish_resp hp */
        hp?: (number | null);

        /** update_fish_resp pos */
        pos?: (number | null);

        /** update_fish_resp model */
        model?: (number | null);

        /** update_fish_resp owner_id */
        owner_id?: (number | Long | null);

        /** update_fish_resp code */
        code?: (RoomMsg.msg_special_code | null);

        /** update_fish_resp level */
        level?: (number | null);
    }

    /** Represents an update_fish_resp. */
    class update_fish_resp implements Iupdate_fish_resp {

        /**
         * Constructs a new update_fish_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iupdate_fish_resp);

        /** update_fish_resp type. */
        public type: number;

        /** update_fish_resp id. */
        public id: (number | Long);

        /** update_fish_resp path_id. */
        public path_id: number;

        /** update_fish_resp create_time_ms. */
        public create_time_ms: (number | Long);

        /** update_fish_resp frozen_time_ms. */
        public frozen_time_ms: (number | Long);

        /** update_fish_resp hp. */
        public hp: number;

        /** update_fish_resp pos. */
        public pos: number;

        /** update_fish_resp model. */
        public model: number;

        /** update_fish_resp owner_id. */
        public owner_id: (number | Long);

        /** update_fish_resp code. */
        public code: RoomMsg.msg_special_code;

        /** update_fish_resp level. */
        public level: number;

        /**
         * Creates a new update_fish_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns update_fish_resp instance
         */
        public static create(properties?: RoomMsg.Iupdate_fish_resp): RoomMsg.update_fish_resp;

        /**
         * Encodes the specified update_fish_resp message. Does not implicitly {@link RoomMsg.update_fish_resp.verify|verify} messages.
         * @param message update_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iupdate_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified update_fish_resp message, length delimited. Does not implicitly {@link RoomMsg.update_fish_resp.verify|verify} messages.
         * @param message update_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iupdate_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an update_fish_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns update_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.update_fish_resp;

        /**
         * Decodes an update_fish_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns update_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.update_fish_resp;

        /**
         * Verifies an update_fish_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a hit_fish_req. */
    interface Ihit_fish_req {

        /** hit_fish_req bullet_multi */
        bullet_multi: number;

        /** hit_fish_req fish_id */
        fish_id?: ((number | Long)[] | null);

        /** hit_fish_req related_fish */
        related_fish?: ((number | Long)[] | null);

        /** hit_fish_req bulletid */
        bulletid: (number | Long);

        /** hit_fish_req weapon_type */
        weapon_type?: (number | null);
    }

    /** Represents a hit_fish_req. */
    class hit_fish_req implements Ihit_fish_req {

        /**
         * Constructs a new hit_fish_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ihit_fish_req);

        /** hit_fish_req bullet_multi. */
        public bullet_multi: number;

        /** hit_fish_req fish_id. */
        public fish_id: (number | Long)[];

        /** hit_fish_req related_fish. */
        public related_fish: (number | Long)[];

        /** hit_fish_req bulletid. */
        public bulletid: (number | Long);

        /** hit_fish_req weapon_type. */
        public weapon_type: number;

        /**
         * Creates a new hit_fish_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns hit_fish_req instance
         */
        public static create(properties?: RoomMsg.Ihit_fish_req): RoomMsg.hit_fish_req;

        /**
         * Encodes the specified hit_fish_req message. Does not implicitly {@link RoomMsg.hit_fish_req.verify|verify} messages.
         * @param message hit_fish_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ihit_fish_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified hit_fish_req message, length delimited. Does not implicitly {@link RoomMsg.hit_fish_req.verify|verify} messages.
         * @param message hit_fish_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ihit_fish_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a hit_fish_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns hit_fish_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.hit_fish_req;

        /**
         * Decodes a hit_fish_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns hit_fish_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.hit_fish_req;

        /**
         * Verifies a hit_fish_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a related_fish. */
    interface Irelated_fish {

        /** related_fish fish_id */
        fish_id: (number | Long);

        /** related_fish fish */
        fish?: ((number | Long)[] | null);
    }

    /** Represents a related_fish. */
    class related_fish implements Irelated_fish {

        /**
         * Constructs a new related_fish.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Irelated_fish);

        /** related_fish fish_id. */
        public fish_id: (number | Long);

        /** related_fish fish. */
        public fish: (number | Long)[];

        /**
         * Creates a new related_fish instance using the specified properties.
         * @param [properties] Properties to set
         * @returns related_fish instance
         */
        public static create(properties?: RoomMsg.Irelated_fish): RoomMsg.related_fish;

        /**
         * Encodes the specified related_fish message. Does not implicitly {@link RoomMsg.related_fish.verify|verify} messages.
         * @param message related_fish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Irelated_fish, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified related_fish message, length delimited. Does not implicitly {@link RoomMsg.related_fish.verify|verify} messages.
         * @param message related_fish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Irelated_fish, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a related_fish message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns related_fish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.related_fish;

        /**
         * Decodes a related_fish message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns related_fish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.related_fish;

        /**
         * Verifies a related_fish message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a hit_fish_resp. */
    interface Ihit_fish_resp {

        /** hit_fish_resp code */
        code: RoomMsg.msg_room_code;
    }

    /** Represents a hit_fish_resp. */
    class hit_fish_resp implements Ihit_fish_resp {

        /**
         * Constructs a new hit_fish_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ihit_fish_resp);

        /** hit_fish_resp code. */
        public code: RoomMsg.msg_room_code;

        /**
         * Creates a new hit_fish_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns hit_fish_resp instance
         */
        public static create(properties?: RoomMsg.Ihit_fish_resp): RoomMsg.hit_fish_resp;

        /**
         * Encodes the specified hit_fish_resp message. Does not implicitly {@link RoomMsg.hit_fish_resp.verify|verify} messages.
         * @param message hit_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ihit_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified hit_fish_resp message, length delimited. Does not implicitly {@link RoomMsg.hit_fish_resp.verify|verify} messages.
         * @param message hit_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ihit_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a hit_fish_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns hit_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.hit_fish_resp;

        /**
         * Decodes a hit_fish_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns hit_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.hit_fish_resp;

        /**
         * Verifies a hit_fish_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a weapon_chip_resp. */
    interface Iweapon_chip_resp {

        /** weapon_chip_resp uid */
        uid: (number | Long);

        /** weapon_chip_resp weapon_type */
        weapon_type: number;

        /** weapon_chip_resp bulletid */
        bulletid: (number | Long);

        /** weapon_chip_resp jettonshow */
        jettonshow: (number | Long);

        /** weapon_chip_resp dead_fish */
        dead_fish?: (RoomMsg.Ifish_bonus_info[] | null);

        /** weapon_chip_resp dead_no_fish */
        dead_no_fish?: (RoomMsg.Ifish_bonus_info[] | null);
    }

    /** Represents a weapon_chip_resp. */
    class weapon_chip_resp implements Iweapon_chip_resp {

        /**
         * Constructs a new weapon_chip_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iweapon_chip_resp);

        /** weapon_chip_resp uid. */
        public uid: (number | Long);

        /** weapon_chip_resp weapon_type. */
        public weapon_type: number;

        /** weapon_chip_resp bulletid. */
        public bulletid: (number | Long);

        /** weapon_chip_resp jettonshow. */
        public jettonshow: (number | Long);

        /** weapon_chip_resp dead_fish. */
        public dead_fish: RoomMsg.Ifish_bonus_info[];

        /** weapon_chip_resp dead_no_fish. */
        public dead_no_fish: RoomMsg.Ifish_bonus_info[];

        /**
         * Creates a new weapon_chip_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns weapon_chip_resp instance
         */
        public static create(properties?: RoomMsg.Iweapon_chip_resp): RoomMsg.weapon_chip_resp;

        /**
         * Encodes the specified weapon_chip_resp message. Does not implicitly {@link RoomMsg.weapon_chip_resp.verify|verify} messages.
         * @param message weapon_chip_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iweapon_chip_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified weapon_chip_resp message, length delimited. Does not implicitly {@link RoomMsg.weapon_chip_resp.verify|verify} messages.
         * @param message weapon_chip_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iweapon_chip_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a weapon_chip_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns weapon_chip_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.weapon_chip_resp;

        /**
         * Decodes a weapon_chip_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns weapon_chip_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.weapon_chip_resp;

        /**
         * Verifies a weapon_chip_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_dead_resp. */
    interface Ifish_dead_resp {

        /** fish_dead_resp uid */
        uid: (number | Long);

        /** fish_dead_resp fish_killed */
        fish_killed?: (RoomMsg.Ifish_bonus_info[] | null);

        /** fish_dead_resp bulletid */
        bulletid: (number | Long);

        /** fish_dead_resp jettonshow */
        jettonshow: (number | Long);

        /** fish_dead_resp bulletleft */
        bulletleft?: (number | null);
    }

    /** Represents a fish_dead_resp. */
    class fish_dead_resp implements Ifish_dead_resp {

        /**
         * Constructs a new fish_dead_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_dead_resp);

        /** fish_dead_resp uid. */
        public uid: (number | Long);

        /** fish_dead_resp fish_killed. */
        public fish_killed: RoomMsg.Ifish_bonus_info[];

        /** fish_dead_resp bulletid. */
        public bulletid: (number | Long);

        /** fish_dead_resp jettonshow. */
        public jettonshow: (number | Long);

        /** fish_dead_resp bulletleft. */
        public bulletleft: number;

        /**
         * Creates a new fish_dead_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_dead_resp instance
         */
        public static create(properties?: RoomMsg.Ifish_dead_resp): RoomMsg.fish_dead_resp;

        /**
         * Encodes the specified fish_dead_resp message. Does not implicitly {@link RoomMsg.fish_dead_resp.verify|verify} messages.
         * @param message fish_dead_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_dead_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_dead_resp message, length delimited. Does not implicitly {@link RoomMsg.fish_dead_resp.verify|verify} messages.
         * @param message fish_dead_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_dead_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_dead_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_dead_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_dead_resp;

        /**
         * Decodes a fish_dead_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_dead_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_dead_resp;

        /**
         * Verifies a fish_dead_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a shoot_bullet_req. */
    interface Ishoot_bullet_req {

        /** shoot_bullet_req uid */
        uid: (number | Long);

        /** shoot_bullet_req multi */
        multi: number;

        /** shoot_bullet_req angel */
        angel: number;

        /** shoot_bullet_req time */
        time: (number | Long);

        /** shoot_bullet_req fishid */
        fishid: (number | Long);

        /** shoot_bullet_req bulletid */
        bulletid: (number | Long);
    }

    /** Represents a shoot_bullet_req. */
    class shoot_bullet_req implements Ishoot_bullet_req {

        /**
         * Constructs a new shoot_bullet_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ishoot_bullet_req);

        /** shoot_bullet_req uid. */
        public uid: (number | Long);

        /** shoot_bullet_req multi. */
        public multi: number;

        /** shoot_bullet_req angel. */
        public angel: number;

        /** shoot_bullet_req time. */
        public time: (number | Long);

        /** shoot_bullet_req fishid. */
        public fishid: (number | Long);

        /** shoot_bullet_req bulletid. */
        public bulletid: (number | Long);

        /**
         * Creates a new shoot_bullet_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns shoot_bullet_req instance
         */
        public static create(properties?: RoomMsg.Ishoot_bullet_req): RoomMsg.shoot_bullet_req;

        /**
         * Encodes the specified shoot_bullet_req message. Does not implicitly {@link RoomMsg.shoot_bullet_req.verify|verify} messages.
         * @param message shoot_bullet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ishoot_bullet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified shoot_bullet_req message, length delimited. Does not implicitly {@link RoomMsg.shoot_bullet_req.verify|verify} messages.
         * @param message shoot_bullet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ishoot_bullet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a shoot_bullet_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns shoot_bullet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.shoot_bullet_req;

        /**
         * Decodes a shoot_bullet_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns shoot_bullet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.shoot_bullet_req;

        /**
         * Verifies a shoot_bullet_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a shoot_bullet_resp. */
    interface Ishoot_bullet_resp {

        /** shoot_bullet_resp uid */
        uid: (number | Long);

        /** shoot_bullet_resp multi */
        multi: number;

        /** shoot_bullet_resp angel */
        angel: number;

        /** shoot_bullet_resp time */
        time: (number | Long);

        /** shoot_bullet_resp fishid */
        fishid: (number | Long);

        /** shoot_bullet_resp bulletid */
        bulletid: (number | Long);

        /** shoot_bullet_resp jettonshow */
        jettonshow: (number | Long);

        /** shoot_bullet_resp bulletleft */
        bulletleft?: (number | null);
    }

    /** Represents a shoot_bullet_resp. */
    class shoot_bullet_resp implements Ishoot_bullet_resp {

        /**
         * Constructs a new shoot_bullet_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ishoot_bullet_resp);

        /** shoot_bullet_resp uid. */
        public uid: (number | Long);

        /** shoot_bullet_resp multi. */
        public multi: number;

        /** shoot_bullet_resp angel. */
        public angel: number;

        /** shoot_bullet_resp time. */
        public time: (number | Long);

        /** shoot_bullet_resp fishid. */
        public fishid: (number | Long);

        /** shoot_bullet_resp bulletid. */
        public bulletid: (number | Long);

        /** shoot_bullet_resp jettonshow. */
        public jettonshow: (number | Long);

        /** shoot_bullet_resp bulletleft. */
        public bulletleft: number;

        /**
         * Creates a new shoot_bullet_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns shoot_bullet_resp instance
         */
        public static create(properties?: RoomMsg.Ishoot_bullet_resp): RoomMsg.shoot_bullet_resp;

        /**
         * Encodes the specified shoot_bullet_resp message. Does not implicitly {@link RoomMsg.shoot_bullet_resp.verify|verify} messages.
         * @param message shoot_bullet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ishoot_bullet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified shoot_bullet_resp message, length delimited. Does not implicitly {@link RoomMsg.shoot_bullet_resp.verify|verify} messages.
         * @param message shoot_bullet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ishoot_bullet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a shoot_bullet_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns shoot_bullet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.shoot_bullet_resp;

        /**
         * Decodes a shoot_bullet_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns shoot_bullet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.shoot_bullet_resp;

        /**
         * Verifies a shoot_bullet_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a change_battery_req. */
    interface Ichange_battery_req {

        /** change_battery_req multi */
        multi: number;
    }

    /** Represents a change_battery_req. */
    class change_battery_req implements Ichange_battery_req {

        /**
         * Constructs a new change_battery_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ichange_battery_req);

        /** change_battery_req multi. */
        public multi: number;

        /**
         * Creates a new change_battery_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns change_battery_req instance
         */
        public static create(properties?: RoomMsg.Ichange_battery_req): RoomMsg.change_battery_req;

        /**
         * Encodes the specified change_battery_req message. Does not implicitly {@link RoomMsg.change_battery_req.verify|verify} messages.
         * @param message change_battery_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ichange_battery_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified change_battery_req message, length delimited. Does not implicitly {@link RoomMsg.change_battery_req.verify|verify} messages.
         * @param message change_battery_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ichange_battery_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a change_battery_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns change_battery_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.change_battery_req;

        /**
         * Decodes a change_battery_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns change_battery_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.change_battery_req;

        /**
         * Verifies a change_battery_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a change_battery_resp. */
    interface Ichange_battery_resp {

        /** change_battery_resp uid */
        uid: (number | Long);

        /** change_battery_resp multi */
        multi: number;
    }

    /** Represents a change_battery_resp. */
    class change_battery_resp implements Ichange_battery_resp {

        /**
         * Constructs a new change_battery_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ichange_battery_resp);

        /** change_battery_resp uid. */
        public uid: (number | Long);

        /** change_battery_resp multi. */
        public multi: number;

        /**
         * Creates a new change_battery_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns change_battery_resp instance
         */
        public static create(properties?: RoomMsg.Ichange_battery_resp): RoomMsg.change_battery_resp;

        /**
         * Encodes the specified change_battery_resp message. Does not implicitly {@link RoomMsg.change_battery_resp.verify|verify} messages.
         * @param message change_battery_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ichange_battery_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified change_battery_resp message, length delimited. Does not implicitly {@link RoomMsg.change_battery_resp.verify|verify} messages.
         * @param message change_battery_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ichange_battery_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a change_battery_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns change_battery_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.change_battery_resp;

        /**
         * Decodes a change_battery_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns change_battery_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.change_battery_resp;

        /**
         * Verifies a change_battery_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a leave_room_req. */
    interface Ileave_room_req {
    }

    /** Represents a leave_room_req. */
    class leave_room_req implements Ileave_room_req {

        /**
         * Constructs a new leave_room_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ileave_room_req);

        /**
         * Creates a new leave_room_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns leave_room_req instance
         */
        public static create(properties?: RoomMsg.Ileave_room_req): RoomMsg.leave_room_req;

        /**
         * Encodes the specified leave_room_req message. Does not implicitly {@link RoomMsg.leave_room_req.verify|verify} messages.
         * @param message leave_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ileave_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified leave_room_req message, length delimited. Does not implicitly {@link RoomMsg.leave_room_req.verify|verify} messages.
         * @param message leave_room_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ileave_room_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a leave_room_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns leave_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.leave_room_req;

        /**
         * Decodes a leave_room_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns leave_room_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.leave_room_req;

        /**
         * Verifies a leave_room_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a leave_room_resp. */
    interface Ileave_room_resp {

        /** leave_room_resp uid */
        uid: (number | Long);
    }

    /** Represents a leave_room_resp. */
    class leave_room_resp implements Ileave_room_resp {

        /**
         * Constructs a new leave_room_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ileave_room_resp);

        /** leave_room_resp uid. */
        public uid: (number | Long);

        /**
         * Creates a new leave_room_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns leave_room_resp instance
         */
        public static create(properties?: RoomMsg.Ileave_room_resp): RoomMsg.leave_room_resp;

        /**
         * Encodes the specified leave_room_resp message. Does not implicitly {@link RoomMsg.leave_room_resp.verify|verify} messages.
         * @param message leave_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ileave_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified leave_room_resp message, length delimited. Does not implicitly {@link RoomMsg.leave_room_resp.verify|verify} messages.
         * @param message leave_room_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ileave_room_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a leave_room_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns leave_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.leave_room_resp;

        /**
         * Decodes a leave_room_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns leave_room_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.leave_room_resp;

        /**
         * Verifies a leave_room_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a room_role_info. */
    interface Iroom_role_info {

        /** room_role_info uid */
        uid: (number | Long);

        /** room_role_info position */
        position: number;

        /** room_role_info nickname */
        nickname: string;

        /** room_role_info jetton */
        jetton: (number | Long);

        /** room_role_info bullet_multi */
        bullet_multi: number;

        /** room_role_info level */
        level: number;

        /** room_role_info summon_time */
        summon_time: (number | Long);

        /** room_role_info summon_end_time */
        summon_end_time: (number | Long);

        /** room_role_info jetton_show */
        jetton_show: (number | Long);

        /** room_role_info bullet_left */
        bullet_left?: (number | null);

        /** room_role_info score */
        score?: (number | null);

        /** room_role_info canvas */
        canvas?: (number | null);
    }

    /** Represents a room_role_info. */
    class room_role_info implements Iroom_role_info {

        /**
         * Constructs a new room_role_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iroom_role_info);

        /** room_role_info uid. */
        public uid: (number | Long);

        /** room_role_info position. */
        public position: number;

        /** room_role_info nickname. */
        public nickname: string;

        /** room_role_info jetton. */
        public jetton: (number | Long);

        /** room_role_info bullet_multi. */
        public bullet_multi: number;

        /** room_role_info level. */
        public level: number;

        /** room_role_info summon_time. */
        public summon_time: (number | Long);

        /** room_role_info summon_end_time. */
        public summon_end_time: (number | Long);

        /** room_role_info jetton_show. */
        public jetton_show: (number | Long);

        /** room_role_info bullet_left. */
        public bullet_left: number;

        /** room_role_info score. */
        public score: number;

        /** room_role_info canvas. */
        public canvas: number;

        /**
         * Creates a new room_role_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns room_role_info instance
         */
        public static create(properties?: RoomMsg.Iroom_role_info): RoomMsg.room_role_info;

        /**
         * Encodes the specified room_role_info message. Does not implicitly {@link RoomMsg.room_role_info.verify|verify} messages.
         * @param message room_role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iroom_role_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified room_role_info message, length delimited. Does not implicitly {@link RoomMsg.room_role_info.verify|verify} messages.
         * @param message room_role_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iroom_role_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a room_role_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns room_role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.room_role_info;

        /**
         * Decodes a room_role_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns room_role_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.room_role_info;

        /**
         * Verifies a room_role_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_bonus_info. */
    interface Ifish_bonus_info {

        /** fish_bonus_info fish_id */
        fish_id: (number | Long);

        /** fish_bonus_info bonus */
        bonus: number;

        /** fish_bonus_info reward */
        reward: number;
    }

    /** Represents a fish_bonus_info. */
    class fish_bonus_info implements Ifish_bonus_info {

        /**
         * Constructs a new fish_bonus_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_bonus_info);

        /** fish_bonus_info fish_id. */
        public fish_id: (number | Long);

        /** fish_bonus_info bonus. */
        public bonus: number;

        /** fish_bonus_info reward. */
        public reward: number;

        /**
         * Creates a new fish_bonus_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_bonus_info instance
         */
        public static create(properties?: RoomMsg.Ifish_bonus_info): RoomMsg.fish_bonus_info;

        /**
         * Encodes the specified fish_bonus_info message. Does not implicitly {@link RoomMsg.fish_bonus_info.verify|verify} messages.
         * @param message fish_bonus_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_bonus_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_bonus_info message, length delimited. Does not implicitly {@link RoomMsg.fish_bonus_info.verify|verify} messages.
         * @param message fish_bonus_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_bonus_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_bonus_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_bonus_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_bonus_info;

        /**
         * Decodes a fish_bonus_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_bonus_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_bonus_info;

        /**
         * Verifies a fish_bonus_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an update_chips_resp. */
    interface Iupdate_chips_resp {

        /** update_chips_resp uid */
        uid: (number | Long);

        /** update_chips_resp chips */
        chips: (number | Long);

        /** update_chips_resp jettonshow */
        jettonshow: (number | Long);

        /** update_chips_resp bulletid */
        bulletid: (number | Long);
    }

    /** Represents an update_chips_resp. */
    class update_chips_resp implements Iupdate_chips_resp {

        /**
         * Constructs a new update_chips_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iupdate_chips_resp);

        /** update_chips_resp uid. */
        public uid: (number | Long);

        /** update_chips_resp chips. */
        public chips: (number | Long);

        /** update_chips_resp jettonshow. */
        public jettonshow: (number | Long);

        /** update_chips_resp bulletid. */
        public bulletid: (number | Long);

        /**
         * Creates a new update_chips_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns update_chips_resp instance
         */
        public static create(properties?: RoomMsg.Iupdate_chips_resp): RoomMsg.update_chips_resp;

        /**
         * Encodes the specified update_chips_resp message. Does not implicitly {@link RoomMsg.update_chips_resp.verify|verify} messages.
         * @param message update_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iupdate_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified update_chips_resp message, length delimited. Does not implicitly {@link RoomMsg.update_chips_resp.verify|verify} messages.
         * @param message update_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iupdate_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an update_chips_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns update_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.update_chips_resp;

        /**
         * Decodes an update_chips_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns update_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.update_chips_resp;

        /**
         * Verifies an update_chips_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a shoot_err_resp. */
    interface Ishoot_err_resp {

        /** shoot_err_resp code */
        code: RoomMsg.msg_room_code;
    }

    /** Represents a shoot_err_resp. */
    class shoot_err_resp implements Ishoot_err_resp {

        /**
         * Constructs a new shoot_err_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ishoot_err_resp);

        /** shoot_err_resp code. */
        public code: RoomMsg.msg_room_code;

        /**
         * Creates a new shoot_err_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns shoot_err_resp instance
         */
        public static create(properties?: RoomMsg.Ishoot_err_resp): RoomMsg.shoot_err_resp;

        /**
         * Encodes the specified shoot_err_resp message. Does not implicitly {@link RoomMsg.shoot_err_resp.verify|verify} messages.
         * @param message shoot_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ishoot_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified shoot_err_resp message, length delimited. Does not implicitly {@link RoomMsg.shoot_err_resp.verify|verify} messages.
         * @param message shoot_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ishoot_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a shoot_err_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns shoot_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.shoot_err_resp;

        /**
         * Decodes a shoot_err_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns shoot_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.shoot_err_resp;

        /**
         * Verifies a shoot_err_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a battery_err_resp. */
    interface Ibattery_err_resp {

        /** battery_err_resp code */
        code: RoomMsg.msg_room_code;
    }

    /** Represents a battery_err_resp. */
    class battery_err_resp implements Ibattery_err_resp {

        /**
         * Constructs a new battery_err_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ibattery_err_resp);

        /** battery_err_resp code. */
        public code: RoomMsg.msg_room_code;

        /**
         * Creates a new battery_err_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns battery_err_resp instance
         */
        public static create(properties?: RoomMsg.Ibattery_err_resp): RoomMsg.battery_err_resp;

        /**
         * Encodes the specified battery_err_resp message. Does not implicitly {@link RoomMsg.battery_err_resp.verify|verify} messages.
         * @param message battery_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ibattery_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified battery_err_resp message, length delimited. Does not implicitly {@link RoomMsg.battery_err_resp.verify|verify} messages.
         * @param message battery_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ibattery_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a battery_err_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns battery_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.battery_err_resp;

        /**
         * Decodes a battery_err_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns battery_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.battery_err_resp;

        /**
         * Verifies a battery_err_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a sync_chips_rep. */
    interface Isync_chips_rep {
    }

    /** Represents a sync_chips_rep. */
    class sync_chips_rep implements Isync_chips_rep {

        /**
         * Constructs a new sync_chips_rep.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isync_chips_rep);

        /**
         * Creates a new sync_chips_rep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sync_chips_rep instance
         */
        public static create(properties?: RoomMsg.Isync_chips_rep): RoomMsg.sync_chips_rep;

        /**
         * Encodes the specified sync_chips_rep message. Does not implicitly {@link RoomMsg.sync_chips_rep.verify|verify} messages.
         * @param message sync_chips_rep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isync_chips_rep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified sync_chips_rep message, length delimited. Does not implicitly {@link RoomMsg.sync_chips_rep.verify|verify} messages.
         * @param message sync_chips_rep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isync_chips_rep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a sync_chips_rep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sync_chips_rep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.sync_chips_rep;

        /**
         * Decodes a sync_chips_rep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sync_chips_rep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.sync_chips_rep;

        /**
         * Verifies a sync_chips_rep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a sync_chips_resp. */
    interface Isync_chips_resp {

        /** sync_chips_resp chips */
        chips: (number | Long);
    }

    /** Represents a sync_chips_resp. */
    class sync_chips_resp implements Isync_chips_resp {

        /**
         * Constructs a new sync_chips_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isync_chips_resp);

        /** sync_chips_resp chips. */
        public chips: (number | Long);

        /**
         * Creates a new sync_chips_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sync_chips_resp instance
         */
        public static create(properties?: RoomMsg.Isync_chips_resp): RoomMsg.sync_chips_resp;

        /**
         * Encodes the specified sync_chips_resp message. Does not implicitly {@link RoomMsg.sync_chips_resp.verify|verify} messages.
         * @param message sync_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isync_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified sync_chips_resp message, length delimited. Does not implicitly {@link RoomMsg.sync_chips_resp.verify|verify} messages.
         * @param message sync_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isync_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a sync_chips_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sync_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.sync_chips_resp;

        /**
         * Decodes a sync_chips_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sync_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.sync_chips_resp;

        /**
         * Verifies a sync_chips_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a mq_sync_chips_resp. */
    interface Imq_sync_chips_resp {

        /** mq_sync_chips_resp chips */
        chips: (number | Long);
    }

    /** Represents a mq_sync_chips_resp. */
    class mq_sync_chips_resp implements Imq_sync_chips_resp {

        /**
         * Constructs a new mq_sync_chips_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Imq_sync_chips_resp);

        /** mq_sync_chips_resp chips. */
        public chips: (number | Long);

        /**
         * Creates a new mq_sync_chips_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mq_sync_chips_resp instance
         */
        public static create(properties?: RoomMsg.Imq_sync_chips_resp): RoomMsg.mq_sync_chips_resp;

        /**
         * Encodes the specified mq_sync_chips_resp message. Does not implicitly {@link RoomMsg.mq_sync_chips_resp.verify|verify} messages.
         * @param message mq_sync_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Imq_sync_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified mq_sync_chips_resp message, length delimited. Does not implicitly {@link RoomMsg.mq_sync_chips_resp.verify|verify} messages.
         * @param message mq_sync_chips_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Imq_sync_chips_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a mq_sync_chips_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mq_sync_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.mq_sync_chips_resp;

        /**
         * Decodes a mq_sync_chips_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mq_sync_chips_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.mq_sync_chips_resp;

        /**
         * Verifies a mq_sync_chips_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a novice_prompt_req. */
    interface Inovice_prompt_req {
    }

    /** Represents a novice_prompt_req. */
    class novice_prompt_req implements Inovice_prompt_req {

        /**
         * Constructs a new novice_prompt_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Inovice_prompt_req);

        /**
         * Creates a new novice_prompt_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns novice_prompt_req instance
         */
        public static create(properties?: RoomMsg.Inovice_prompt_req): RoomMsg.novice_prompt_req;

        /**
         * Encodes the specified novice_prompt_req message. Does not implicitly {@link RoomMsg.novice_prompt_req.verify|verify} messages.
         * @param message novice_prompt_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Inovice_prompt_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified novice_prompt_req message, length delimited. Does not implicitly {@link RoomMsg.novice_prompt_req.verify|verify} messages.
         * @param message novice_prompt_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Inovice_prompt_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a novice_prompt_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns novice_prompt_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.novice_prompt_req;

        /**
         * Decodes a novice_prompt_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns novice_prompt_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.novice_prompt_req;

        /**
         * Verifies a novice_prompt_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bullet_useless_req. */
    interface Ibullet_useless_req {

        /** bullet_useless_req uid */
        uid: (number | Long);

        /** bullet_useless_req multi */
        multi: number;

        /** bullet_useless_req bulletid */
        bulletid: (number | Long);
    }

    /** Represents a bullet_useless_req. */
    class bullet_useless_req implements Ibullet_useless_req {

        /**
         * Constructs a new bullet_useless_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ibullet_useless_req);

        /** bullet_useless_req uid. */
        public uid: (number | Long);

        /** bullet_useless_req multi. */
        public multi: number;

        /** bullet_useless_req bulletid. */
        public bulletid: (number | Long);

        /**
         * Creates a new bullet_useless_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bullet_useless_req instance
         */
        public static create(properties?: RoomMsg.Ibullet_useless_req): RoomMsg.bullet_useless_req;

        /**
         * Encodes the specified bullet_useless_req message. Does not implicitly {@link RoomMsg.bullet_useless_req.verify|verify} messages.
         * @param message bullet_useless_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ibullet_useless_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bullet_useless_req message, length delimited. Does not implicitly {@link RoomMsg.bullet_useless_req.verify|verify} messages.
         * @param message bullet_useless_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ibullet_useless_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bullet_useless_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bullet_useless_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.bullet_useless_req;

        /**
         * Decodes a bullet_useless_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bullet_useless_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.bullet_useless_req;

        /**
         * Verifies a bullet_useless_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bullet_useless_resp. */
    interface Ibullet_useless_resp {

        /** bullet_useless_resp uid */
        uid: (number | Long);

        /** bullet_useless_resp jettonshow */
        jettonshow: (number | Long);

        /** bullet_useless_resp bulletid */
        bulletid: (number | Long);

        /** bullet_useless_resp multi */
        multi: number;

        /** bullet_useless_resp bulletleft */
        bulletleft?: (number | null);
    }

    /** Represents a bullet_useless_resp. */
    class bullet_useless_resp implements Ibullet_useless_resp {

        /**
         * Constructs a new bullet_useless_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ibullet_useless_resp);

        /** bullet_useless_resp uid. */
        public uid: (number | Long);

        /** bullet_useless_resp jettonshow. */
        public jettonshow: (number | Long);

        /** bullet_useless_resp bulletid. */
        public bulletid: (number | Long);

        /** bullet_useless_resp multi. */
        public multi: number;

        /** bullet_useless_resp bulletleft. */
        public bulletleft: number;

        /**
         * Creates a new bullet_useless_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bullet_useless_resp instance
         */
        public static create(properties?: RoomMsg.Ibullet_useless_resp): RoomMsg.bullet_useless_resp;

        /**
         * Encodes the specified bullet_useless_resp message. Does not implicitly {@link RoomMsg.bullet_useless_resp.verify|verify} messages.
         * @param message bullet_useless_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ibullet_useless_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bullet_useless_resp message, length delimited. Does not implicitly {@link RoomMsg.bullet_useless_resp.verify|verify} messages.
         * @param message bullet_useless_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ibullet_useless_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bullet_useless_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bullet_useless_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.bullet_useless_resp;

        /**
         * Decodes a bullet_useless_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bullet_useless_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.bullet_useless_resp;

        /**
         * Verifies a bullet_useless_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a bullet_pass_resp. */
    interface Ibullet_pass_resp {

        /** bullet_pass_resp uid */
        uid: (number | Long);

        /** bullet_pass_resp bulletid */
        bulletid: (number | Long);

        /** bullet_pass_resp jettonshow */
        jettonshow: (number | Long);

        /** bullet_pass_resp multi */
        multi: number;

        /** bullet_pass_resp bulletleft */
        bulletleft?: (number | null);
    }

    /** Represents a bullet_pass_resp. */
    class bullet_pass_resp implements Ibullet_pass_resp {

        /**
         * Constructs a new bullet_pass_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ibullet_pass_resp);

        /** bullet_pass_resp uid. */
        public uid: (number | Long);

        /** bullet_pass_resp bulletid. */
        public bulletid: (number | Long);

        /** bullet_pass_resp jettonshow. */
        public jettonshow: (number | Long);

        /** bullet_pass_resp multi. */
        public multi: number;

        /** bullet_pass_resp bulletleft. */
        public bulletleft: number;

        /**
         * Creates a new bullet_pass_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bullet_pass_resp instance
         */
        public static create(properties?: RoomMsg.Ibullet_pass_resp): RoomMsg.bullet_pass_resp;

        /**
         * Encodes the specified bullet_pass_resp message. Does not implicitly {@link RoomMsg.bullet_pass_resp.verify|verify} messages.
         * @param message bullet_pass_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ibullet_pass_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified bullet_pass_resp message, length delimited. Does not implicitly {@link RoomMsg.bullet_pass_resp.verify|verify} messages.
         * @param message bullet_pass_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ibullet_pass_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a bullet_pass_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bullet_pass_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.bullet_pass_resp;

        /**
         * Decodes a bullet_pass_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bullet_pass_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.bullet_pass_resp;

        /**
         * Verifies a bullet_pass_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a sync_jp_jetton_resp. */
    interface Isync_jp_jetton_resp {

        /** sync_jp_jetton_resp uid */
        uid: (number | Long);

        /** sync_jp_jetton_resp bulletid */
        bulletid: (number | Long);

        /** sync_jp_jetton_resp jettonshow */
        jettonshow: (number | Long);
    }

    /** Represents a sync_jp_jetton_resp. */
    class sync_jp_jetton_resp implements Isync_jp_jetton_resp {

        /**
         * Constructs a new sync_jp_jetton_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isync_jp_jetton_resp);

        /** sync_jp_jetton_resp uid. */
        public uid: (number | Long);

        /** sync_jp_jetton_resp bulletid. */
        public bulletid: (number | Long);

        /** sync_jp_jetton_resp jettonshow. */
        public jettonshow: (number | Long);

        /**
         * Creates a new sync_jp_jetton_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sync_jp_jetton_resp instance
         */
        public static create(properties?: RoomMsg.Isync_jp_jetton_resp): RoomMsg.sync_jp_jetton_resp;

        /**
         * Encodes the specified sync_jp_jetton_resp message. Does not implicitly {@link RoomMsg.sync_jp_jetton_resp.verify|verify} messages.
         * @param message sync_jp_jetton_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isync_jp_jetton_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified sync_jp_jetton_resp message, length delimited. Does not implicitly {@link RoomMsg.sync_jp_jetton_resp.verify|verify} messages.
         * @param message sync_jp_jetton_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isync_jp_jetton_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a sync_jp_jetton_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sync_jp_jetton_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.sync_jp_jetton_resp;

        /**
         * Decodes a sync_jp_jetton_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sync_jp_jetton_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.sync_jp_jetton_resp;

        /**
         * Verifies a sync_jp_jetton_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_matrix. */
    interface Ifish_matrix {

        /** fish_matrix type */
        type: number;

        /** fish_matrix id */
        id: (number | Long);

        /** fish_matrix postion_id */
        postion_id: number;

        /** fish_matrix hp */
        hp?: (number | null);

        /** fish_matrix owner_id */
        owner_id?: (number | Long | null);
    }

    /** Represents a fish_matrix. */
    class fish_matrix implements Ifish_matrix {

        /**
         * Constructs a new fish_matrix.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_matrix);

        /** fish_matrix type. */
        public type: number;

        /** fish_matrix id. */
        public id: (number | Long);

        /** fish_matrix postion_id. */
        public postion_id: number;

        /** fish_matrix hp. */
        public hp: number;

        /** fish_matrix owner_id. */
        public owner_id: (number | Long);

        /**
         * Creates a new fish_matrix instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_matrix instance
         */
        public static create(properties?: RoomMsg.Ifish_matrix): RoomMsg.fish_matrix;

        /**
         * Encodes the specified fish_matrix message. Does not implicitly {@link RoomMsg.fish_matrix.verify|verify} messages.
         * @param message fish_matrix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_matrix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_matrix message, length delimited. Does not implicitly {@link RoomMsg.fish_matrix.verify|verify} messages.
         * @param message fish_matrix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_matrix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_matrix message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_matrix;

        /**
         * Decodes a fish_matrix message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_matrix;

        /**
         * Verifies a fish_matrix message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_matrix_resp. */
    interface Ifish_matrix_resp {

        /** fish_matrix_resp matrixid */
        matrixid: (number | Long);

        /** fish_matrix_resp type */
        type: number;

        /** fish_matrix_resp path_id */
        path_id: number;

        /** fish_matrix_resp speed */
        speed: number;

        /** fish_matrix_resp create_time_ms */
        create_time_ms?: (number | Long | null);

        /** fish_matrix_resp fish_list */
        fish_list?: (RoomMsg.Ifish_matrix[] | null);
    }

    /** Represents a fish_matrix_resp. */
    class fish_matrix_resp implements Ifish_matrix_resp {

        /**
         * Constructs a new fish_matrix_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_matrix_resp);

        /** fish_matrix_resp matrixid. */
        public matrixid: (number | Long);

        /** fish_matrix_resp type. */
        public type: number;

        /** fish_matrix_resp path_id. */
        public path_id: number;

        /** fish_matrix_resp speed. */
        public speed: number;

        /** fish_matrix_resp create_time_ms. */
        public create_time_ms: (number | Long);

        /** fish_matrix_resp fish_list. */
        public fish_list: RoomMsg.Ifish_matrix[];

        /**
         * Creates a new fish_matrix_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_matrix_resp instance
         */
        public static create(properties?: RoomMsg.Ifish_matrix_resp): RoomMsg.fish_matrix_resp;

        /**
         * Encodes the specified fish_matrix_resp message. Does not implicitly {@link RoomMsg.fish_matrix_resp.verify|verify} messages.
         * @param message fish_matrix_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_matrix_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_matrix_resp message, length delimited. Does not implicitly {@link RoomMsg.fish_matrix_resp.verify|verify} messages.
         * @param message fish_matrix_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_matrix_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_matrix_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_matrix_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_matrix_resp;

        /**
         * Decodes a fish_matrix_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_matrix_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_matrix_resp;

        /**
         * Verifies a fish_matrix_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a wave_matrix. */
    interface Iwave_matrix {

        /** wave_matrix fish_id */
        fish_id: number;

        /** wave_matrix uid */
        uid: (number | Long);
    }

    /** Represents a wave_matrix. */
    class wave_matrix implements Iwave_matrix {

        /**
         * Constructs a new wave_matrix.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iwave_matrix);

        /** wave_matrix fish_id. */
        public fish_id: number;

        /** wave_matrix uid. */
        public uid: (number | Long);

        /**
         * Creates a new wave_matrix instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wave_matrix instance
         */
        public static create(properties?: RoomMsg.Iwave_matrix): RoomMsg.wave_matrix;

        /**
         * Encodes the specified wave_matrix message. Does not implicitly {@link RoomMsg.wave_matrix.verify|verify} messages.
         * @param message wave_matrix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iwave_matrix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified wave_matrix message, length delimited. Does not implicitly {@link RoomMsg.wave_matrix.verify|verify} messages.
         * @param message wave_matrix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iwave_matrix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a wave_matrix message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wave_matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.wave_matrix;

        /**
         * Decodes a wave_matrix message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wave_matrix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.wave_matrix;

        /**
         * Verifies a wave_matrix message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a wave_matrix_resp. */
    interface Iwave_matrix_resp {

        /** wave_matrix_resp wave_id */
        wave_id: number;

        /** wave_matrix_resp create_time_ms */
        create_time_ms: (number | Long);

        /** wave_matrix_resp fish_list */
        fish_list?: (RoomMsg.Iwave_matrix[] | null);
    }

    /** Represents a wave_matrix_resp. */
    class wave_matrix_resp implements Iwave_matrix_resp {

        /**
         * Constructs a new wave_matrix_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iwave_matrix_resp);

        /** wave_matrix_resp wave_id. */
        public wave_id: number;

        /** wave_matrix_resp create_time_ms. */
        public create_time_ms: (number | Long);

        /** wave_matrix_resp fish_list. */
        public fish_list: RoomMsg.Iwave_matrix[];

        /**
         * Creates a new wave_matrix_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wave_matrix_resp instance
         */
        public static create(properties?: RoomMsg.Iwave_matrix_resp): RoomMsg.wave_matrix_resp;

        /**
         * Encodes the specified wave_matrix_resp message. Does not implicitly {@link RoomMsg.wave_matrix_resp.verify|verify} messages.
         * @param message wave_matrix_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iwave_matrix_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified wave_matrix_resp message, length delimited. Does not implicitly {@link RoomMsg.wave_matrix_resp.verify|verify} messages.
         * @param message wave_matrix_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iwave_matrix_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a wave_matrix_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wave_matrix_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.wave_matrix_resp;

        /**
         * Decodes a wave_matrix_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wave_matrix_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.wave_matrix_resp;

        /**
         * Verifies a wave_matrix_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a clean_wave_resp. */
    interface Iclean_wave_resp {
    }

    /** Represents a clean_wave_resp. */
    class clean_wave_resp implements Iclean_wave_resp {

        /**
         * Constructs a new clean_wave_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iclean_wave_resp);

        /**
         * Creates a new clean_wave_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns clean_wave_resp instance
         */
        public static create(properties?: RoomMsg.Iclean_wave_resp): RoomMsg.clean_wave_resp;

        /**
         * Encodes the specified clean_wave_resp message. Does not implicitly {@link RoomMsg.clean_wave_resp.verify|verify} messages.
         * @param message clean_wave_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iclean_wave_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified clean_wave_resp message, length delimited. Does not implicitly {@link RoomMsg.clean_wave_resp.verify|verify} messages.
         * @param message clean_wave_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iclean_wave_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a clean_wave_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns clean_wave_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.clean_wave_resp;

        /**
         * Decodes a clean_wave_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns clean_wave_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.clean_wave_resp;

        /**
         * Verifies a clean_wave_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a summon_fish_req. */
    interface Isummon_fish_req {
    }

    /** Represents a summon_fish_req. */
    class summon_fish_req implements Isummon_fish_req {

        /**
         * Constructs a new summon_fish_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isummon_fish_req);

        /**
         * Creates a new summon_fish_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns summon_fish_req instance
         */
        public static create(properties?: RoomMsg.Isummon_fish_req): RoomMsg.summon_fish_req;

        /**
         * Encodes the specified summon_fish_req message. Does not implicitly {@link RoomMsg.summon_fish_req.verify|verify} messages.
         * @param message summon_fish_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isummon_fish_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified summon_fish_req message, length delimited. Does not implicitly {@link RoomMsg.summon_fish_req.verify|verify} messages.
         * @param message summon_fish_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isummon_fish_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a summon_fish_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns summon_fish_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.summon_fish_req;

        /**
         * Decodes a summon_fish_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns summon_fish_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.summon_fish_req;

        /**
         * Verifies a summon_fish_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a summon_err_resp. */
    interface Isummon_err_resp {

        /** summon_err_resp code */
        code: RoomMsg.msg_room_code;
    }

    /** Represents a summon_err_resp. */
    class summon_err_resp implements Isummon_err_resp {

        /**
         * Constructs a new summon_err_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isummon_err_resp);

        /** summon_err_resp code. */
        public code: RoomMsg.msg_room_code;

        /**
         * Creates a new summon_err_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns summon_err_resp instance
         */
        public static create(properties?: RoomMsg.Isummon_err_resp): RoomMsg.summon_err_resp;

        /**
         * Encodes the specified summon_err_resp message. Does not implicitly {@link RoomMsg.summon_err_resp.verify|verify} messages.
         * @param message summon_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isummon_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified summon_err_resp message, length delimited. Does not implicitly {@link RoomMsg.summon_err_resp.verify|verify} messages.
         * @param message summon_err_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isummon_err_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a summon_err_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns summon_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.summon_err_resp;

        /**
         * Decodes a summon_err_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns summon_err_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.summon_err_resp;

        /**
         * Verifies a summon_err_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a summon_fish_resp. */
    interface Isummon_fish_resp {

        /** summon_fish_resp uid */
        uid: (number | Long);

        /** summon_fish_resp nickname */
        nickname: string;

        /** summon_fish_resp summon_end_time */
        summon_end_time: (number | Long);

        /** summon_fish_resp chips */
        chips: (number | Long);

        /** summon_fish_resp summon_time */
        summon_time: (number | Long);
    }

    /** Represents a summon_fish_resp. */
    class summon_fish_resp implements Isummon_fish_resp {

        /**
         * Constructs a new summon_fish_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Isummon_fish_resp);

        /** summon_fish_resp uid. */
        public uid: (number | Long);

        /** summon_fish_resp nickname. */
        public nickname: string;

        /** summon_fish_resp summon_end_time. */
        public summon_end_time: (number | Long);

        /** summon_fish_resp chips. */
        public chips: (number | Long);

        /** summon_fish_resp summon_time. */
        public summon_time: (number | Long);

        /**
         * Creates a new summon_fish_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns summon_fish_resp instance
         */
        public static create(properties?: RoomMsg.Isummon_fish_resp): RoomMsg.summon_fish_resp;

        /**
         * Encodes the specified summon_fish_resp message. Does not implicitly {@link RoomMsg.summon_fish_resp.verify|verify} messages.
         * @param message summon_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Isummon_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified summon_fish_resp message, length delimited. Does not implicitly {@link RoomMsg.summon_fish_resp.verify|verify} messages.
         * @param message summon_fish_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Isummon_fish_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a summon_fish_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns summon_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.summon_fish_resp;

        /**
         * Decodes a summon_fish_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns summon_fish_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.summon_fish_resp;

        /**
         * Verifies a summon_fish_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an one_piece_resp. */
    interface Ione_piece_resp {

        /** one_piece_resp uid */
        uid: (number | Long);

        /** one_piece_resp fish_killed */
        fish_killed?: (RoomMsg.Ifish_bonus_info[] | null);

        /** one_piece_resp bulletid */
        bulletid: (number | Long);

        /** one_piece_resp jettonshow */
        jettonshow: (number | Long);
    }

    /** Represents an one_piece_resp. */
    class one_piece_resp implements Ione_piece_resp {

        /**
         * Constructs a new one_piece_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ione_piece_resp);

        /** one_piece_resp uid. */
        public uid: (number | Long);

        /** one_piece_resp fish_killed. */
        public fish_killed: RoomMsg.Ifish_bonus_info[];

        /** one_piece_resp bulletid. */
        public bulletid: (number | Long);

        /** one_piece_resp jettonshow. */
        public jettonshow: (number | Long);

        /**
         * Creates a new one_piece_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns one_piece_resp instance
         */
        public static create(properties?: RoomMsg.Ione_piece_resp): RoomMsg.one_piece_resp;

        /**
         * Encodes the specified one_piece_resp message. Does not implicitly {@link RoomMsg.one_piece_resp.verify|verify} messages.
         * @param message one_piece_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ione_piece_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified one_piece_resp message, length delimited. Does not implicitly {@link RoomMsg.one_piece_resp.verify|verify} messages.
         * @param message one_piece_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ione_piece_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an one_piece_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns one_piece_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.one_piece_resp;

        /**
         * Decodes an one_piece_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns one_piece_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.one_piece_resp;

        /**
         * Verifies an one_piece_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a hit_result_resp. */
    interface Ihit_result_resp {

        /** hit_result_resp fish_id */
        fish_id: (number | Long);

        /** hit_result_resp hp */
        hp?: (number | null);
    }

    /** Represents a hit_result_resp. */
    class hit_result_resp implements Ihit_result_resp {

        /**
         * Constructs a new hit_result_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ihit_result_resp);

        /** hit_result_resp fish_id. */
        public fish_id: (number | Long);

        /** hit_result_resp hp. */
        public hp: number;

        /**
         * Creates a new hit_result_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns hit_result_resp instance
         */
        public static create(properties?: RoomMsg.Ihit_result_resp): RoomMsg.hit_result_resp;

        /**
         * Encodes the specified hit_result_resp message. Does not implicitly {@link RoomMsg.hit_result_resp.verify|verify} messages.
         * @param message hit_result_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ihit_result_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified hit_result_resp message, length delimited. Does not implicitly {@link RoomMsg.hit_result_resp.verify|verify} messages.
         * @param message hit_result_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ihit_result_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a hit_result_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns hit_result_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.hit_result_resp;

        /**
         * Decodes a hit_result_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns hit_result_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.hit_result_resp;

        /**
         * Verifies a hit_result_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an extra_reward_req. */
    interface Iextra_reward_req {
    }

    /** Represents an extra_reward_req. */
    class extra_reward_req implements Iextra_reward_req {

        /**
         * Constructs a new extra_reward_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iextra_reward_req);

        /**
         * Creates a new extra_reward_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns extra_reward_req instance
         */
        public static create(properties?: RoomMsg.Iextra_reward_req): RoomMsg.extra_reward_req;

        /**
         * Encodes the specified extra_reward_req message. Does not implicitly {@link RoomMsg.extra_reward_req.verify|verify} messages.
         * @param message extra_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iextra_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified extra_reward_req message, length delimited. Does not implicitly {@link RoomMsg.extra_reward_req.verify|verify} messages.
         * @param message extra_reward_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iextra_reward_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an extra_reward_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns extra_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.extra_reward_req;

        /**
         * Decodes an extra_reward_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns extra_reward_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.extra_reward_req;

        /**
         * Verifies an extra_reward_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an extra_reward_resp. */
    interface Iextra_reward_resp {

        /** extra_reward_resp reward */
        reward: (number | Long);
    }

    /** Represents an extra_reward_resp. */
    class extra_reward_resp implements Iextra_reward_resp {

        /**
         * Constructs a new extra_reward_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iextra_reward_resp);

        /** extra_reward_resp reward. */
        public reward: (number | Long);

        /**
         * Creates a new extra_reward_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns extra_reward_resp instance
         */
        public static create(properties?: RoomMsg.Iextra_reward_resp): RoomMsg.extra_reward_resp;

        /**
         * Encodes the specified extra_reward_resp message. Does not implicitly {@link RoomMsg.extra_reward_resp.verify|verify} messages.
         * @param message extra_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iextra_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified extra_reward_resp message, length delimited. Does not implicitly {@link RoomMsg.extra_reward_resp.verify|verify} messages.
         * @param message extra_reward_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iextra_reward_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an extra_reward_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns extra_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.extra_reward_resp;

        /**
         * Decodes an extra_reward_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns extra_reward_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.extra_reward_resp;

        /**
         * Verifies an extra_reward_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_select_save_req. */
    interface Ifish_select_save_req {

        /** fish_select_save_req type */
        type?: (number[] | null);
    }

    /** Represents a fish_select_save_req. */
    class fish_select_save_req implements Ifish_select_save_req {

        /**
         * Constructs a new fish_select_save_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_select_save_req);

        /** fish_select_save_req type. */
        public type: number[];

        /**
         * Creates a new fish_select_save_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_select_save_req instance
         */
        public static create(properties?: RoomMsg.Ifish_select_save_req): RoomMsg.fish_select_save_req;

        /**
         * Encodes the specified fish_select_save_req message. Does not implicitly {@link RoomMsg.fish_select_save_req.verify|verify} messages.
         * @param message fish_select_save_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_select_save_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_select_save_req message, length delimited. Does not implicitly {@link RoomMsg.fish_select_save_req.verify|verify} messages.
         * @param message fish_select_save_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_select_save_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_select_save_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_select_save_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_select_save_req;

        /**
         * Decodes a fish_select_save_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_select_save_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_select_save_req;

        /**
         * Verifies a fish_select_save_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_select_save_resp. */
    interface Ifish_select_save_resp {

        /** fish_select_save_resp code */
        code: RoomMsg.msg_fish_save_code;
    }

    /** Represents a fish_select_save_resp. */
    class fish_select_save_resp implements Ifish_select_save_resp {

        /**
         * Constructs a new fish_select_save_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_select_save_resp);

        /** fish_select_save_resp code. */
        public code: RoomMsg.msg_fish_save_code;

        /**
         * Creates a new fish_select_save_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_select_save_resp instance
         */
        public static create(properties?: RoomMsg.Ifish_select_save_resp): RoomMsg.fish_select_save_resp;

        /**
         * Encodes the specified fish_select_save_resp message. Does not implicitly {@link RoomMsg.fish_select_save_resp.verify|verify} messages.
         * @param message fish_select_save_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_select_save_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_select_save_resp message, length delimited. Does not implicitly {@link RoomMsg.fish_select_save_resp.verify|verify} messages.
         * @param message fish_select_save_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_select_save_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_select_save_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_select_save_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_select_save_resp;

        /**
         * Decodes a fish_select_save_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_select_save_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_select_save_resp;

        /**
         * Verifies a fish_select_save_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_select_req. */
    interface Ifish_select_req {
    }

    /** Represents a fish_select_req. */
    class fish_select_req implements Ifish_select_req {

        /**
         * Constructs a new fish_select_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_select_req);

        /**
         * Creates a new fish_select_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_select_req instance
         */
        public static create(properties?: RoomMsg.Ifish_select_req): RoomMsg.fish_select_req;

        /**
         * Encodes the specified fish_select_req message. Does not implicitly {@link RoomMsg.fish_select_req.verify|verify} messages.
         * @param message fish_select_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_select_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_select_req message, length delimited. Does not implicitly {@link RoomMsg.fish_select_req.verify|verify} messages.
         * @param message fish_select_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_select_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_select_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_select_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_select_req;

        /**
         * Decodes a fish_select_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_select_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_select_req;

        /**
         * Verifies a fish_select_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a fish_select_resp. */
    interface Ifish_select_resp {

        /** fish_select_resp type */
        type?: (number[] | null);
    }

    /** Represents a fish_select_resp. */
    class fish_select_resp implements Ifish_select_resp {

        /**
         * Constructs a new fish_select_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Ifish_select_resp);

        /** fish_select_resp type. */
        public type: number[];

        /**
         * Creates a new fish_select_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns fish_select_resp instance
         */
        public static create(properties?: RoomMsg.Ifish_select_resp): RoomMsg.fish_select_resp;

        /**
         * Encodes the specified fish_select_resp message. Does not implicitly {@link RoomMsg.fish_select_resp.verify|verify} messages.
         * @param message fish_select_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Ifish_select_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified fish_select_resp message, length delimited. Does not implicitly {@link RoomMsg.fish_select_resp.verify|verify} messages.
         * @param message fish_select_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Ifish_select_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a fish_select_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns fish_select_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.fish_select_resp;

        /**
         * Decodes a fish_select_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns fish_select_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.fish_select_resp;

        /**
         * Verifies a fish_select_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of an update_valentine_score. */
    interface Iupdate_valentine_score {

        /** update_valentine_score total_score */
        total_score: number;

        /** update_valentine_score score */
        score: number;

        /** update_valentine_score explode */
        explode: boolean;

        /** update_valentine_score end_time */
        end_time?: (number | Long | null);
    }

    /** Represents an update_valentine_score. */
    class update_valentine_score implements Iupdate_valentine_score {

        /**
         * Constructs a new update_valentine_score.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Iupdate_valentine_score);

        /** update_valentine_score total_score. */
        public total_score: number;

        /** update_valentine_score score. */
        public score: number;

        /** update_valentine_score explode. */
        public explode: boolean;

        /** update_valentine_score end_time. */
        public end_time: (number | Long);

        /**
         * Creates a new update_valentine_score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns update_valentine_score instance
         */
        public static create(properties?: RoomMsg.Iupdate_valentine_score): RoomMsg.update_valentine_score;

        /**
         * Encodes the specified update_valentine_score message. Does not implicitly {@link RoomMsg.update_valentine_score.verify|verify} messages.
         * @param message update_valentine_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Iupdate_valentine_score, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified update_valentine_score message, length delimited. Does not implicitly {@link RoomMsg.update_valentine_score.verify|verify} messages.
         * @param message update_valentine_score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Iupdate_valentine_score, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an update_valentine_score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns update_valentine_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.update_valentine_score;

        /**
         * Decodes an update_valentine_score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns update_valentine_score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.update_valentine_score;

        /**
         * Verifies an update_valentine_score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a rotate_canvas_resp. */
    interface Irotate_canvas_resp {

        /** rotate_canvas_resp uid */
        uid: (number | Long);

        /** rotate_canvas_resp mark */
        mark: number;
    }

    /** Represents a rotate_canvas_resp. */
    class rotate_canvas_resp implements Irotate_canvas_resp {

        /**
         * Constructs a new rotate_canvas_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: RoomMsg.Irotate_canvas_resp);

        /** rotate_canvas_resp uid. */
        public uid: (number | Long);

        /** rotate_canvas_resp mark. */
        public mark: number;

        /**
         * Creates a new rotate_canvas_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rotate_canvas_resp instance
         */
        public static create(properties?: RoomMsg.Irotate_canvas_resp): RoomMsg.rotate_canvas_resp;

        /**
         * Encodes the specified rotate_canvas_resp message. Does not implicitly {@link RoomMsg.rotate_canvas_resp.verify|verify} messages.
         * @param message rotate_canvas_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RoomMsg.Irotate_canvas_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified rotate_canvas_resp message, length delimited. Does not implicitly {@link RoomMsg.rotate_canvas_resp.verify|verify} messages.
         * @param message rotate_canvas_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RoomMsg.Irotate_canvas_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a rotate_canvas_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rotate_canvas_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): RoomMsg.rotate_canvas_resp;

        /**
         * Decodes a rotate_canvas_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rotate_canvas_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): RoomMsg.rotate_canvas_resp;

        /**
         * Verifies a rotate_canvas_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace WalletMsg. */
declare namespace WalletMsg {

    /** c_cmd enum. */
    enum c_cmd {
        main_wallet_req = 0,
        main_wallet_resp = 1,
        wallet_req = 2,
        wallet_resp = 3
    }

    /** msg_wallet_code enum. */
    enum msg_wallet_code {
        SUCCESS = 1,
        FAIL = 2,
        FREQUENT = 3,
        FREQUENTY = 4
    }

    /** Represents a msg_wallet_service */
    class msg_wallet_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_wallet_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_wallet_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_wallet_service;

        /**
         * Calls main_wallet.
         * @param request main_wallet_req message or plain object
         * @param callback Node-style callback called with the error, if any, and main_wallet_resp
         */
        public main_wallet(request: WalletMsg.Imain_wallet_req, callback: WalletMsg.msg_wallet_service.main_walletCallback): void;

        /**
         * Calls main_wallet.
         * @param request main_wallet_req message or plain object
         * @returns Promise
         */
        public main_wallet(request: WalletMsg.Imain_wallet_req): Promise<WalletMsg.main_wallet_resp>;

        /**
         * Calls wallet.
         * @param request wallet_req message or plain object
         * @param callback Node-style callback called with the error, if any, and wallet_resp
         */
        public wallet(request: WalletMsg.Iwallet_req, callback: WalletMsg.msg_wallet_service.walletCallback): void;

        /**
         * Calls wallet.
         * @param request wallet_req message or plain object
         * @returns Promise
         */
        public wallet(request: WalletMsg.Iwallet_req): Promise<WalletMsg.wallet_resp>;
    }

    namespace msg_wallet_service {

        /**
         * Callback as used by {@link WalletMsg.msg_wallet_service#main_wallet}.
         * @param error Error, if any
         * @param [response] main_wallet_resp
         */
        type main_walletCallback = (error: (Error | null), response?: WalletMsg.main_wallet_resp) => void;

        /**
         * Callback as used by {@link WalletMsg.msg_wallet_service#wallet}.
         * @param error Error, if any
         * @param [response] wallet_resp
         */
        type walletCallback = (error: (Error | null), response?: WalletMsg.wallet_resp) => void;
    }

    /** Properties of a main_wallet_req. */
    interface Imain_wallet_req {
    }

    /** Represents a main_wallet_req. */
    class main_wallet_req implements Imain_wallet_req {

        /**
         * Constructs a new main_wallet_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: WalletMsg.Imain_wallet_req);

        /**
         * Creates a new main_wallet_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns main_wallet_req instance
         */
        public static create(properties?: WalletMsg.Imain_wallet_req): WalletMsg.main_wallet_req;

        /**
         * Encodes the specified main_wallet_req message. Does not implicitly {@link WalletMsg.main_wallet_req.verify|verify} messages.
         * @param message main_wallet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WalletMsg.Imain_wallet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified main_wallet_req message, length delimited. Does not implicitly {@link WalletMsg.main_wallet_req.verify|verify} messages.
         * @param message main_wallet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WalletMsg.Imain_wallet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a main_wallet_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns main_wallet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WalletMsg.main_wallet_req;

        /**
         * Decodes a main_wallet_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns main_wallet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WalletMsg.main_wallet_req;

        /**
         * Verifies a main_wallet_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a main_wallet_resp. */
    interface Imain_wallet_resp {

        /** main_wallet_resp code */
        code: WalletMsg.msg_wallet_code;

        /** main_wallet_resp chips */
        chips?: (number | Long | null);

        /** main_wallet_resp auto_wallet */
        auto_wallet?: (number | Long | null);
    }

    /** Represents a main_wallet_resp. */
    class main_wallet_resp implements Imain_wallet_resp {

        /**
         * Constructs a new main_wallet_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: WalletMsg.Imain_wallet_resp);

        /** main_wallet_resp code. */
        public code: WalletMsg.msg_wallet_code;

        /** main_wallet_resp chips. */
        public chips: (number | Long);

        /** main_wallet_resp auto_wallet. */
        public auto_wallet: (number | Long);

        /**
         * Creates a new main_wallet_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns main_wallet_resp instance
         */
        public static create(properties?: WalletMsg.Imain_wallet_resp): WalletMsg.main_wallet_resp;

        /**
         * Encodes the specified main_wallet_resp message. Does not implicitly {@link WalletMsg.main_wallet_resp.verify|verify} messages.
         * @param message main_wallet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WalletMsg.Imain_wallet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified main_wallet_resp message, length delimited. Does not implicitly {@link WalletMsg.main_wallet_resp.verify|verify} messages.
         * @param message main_wallet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WalletMsg.Imain_wallet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a main_wallet_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns main_wallet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WalletMsg.main_wallet_resp;

        /**
         * Decodes a main_wallet_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns main_wallet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WalletMsg.main_wallet_resp;

        /**
         * Verifies a main_wallet_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a wallet_req. */
    interface Iwallet_req {

        /** wallet_req chips */
        chips: (number | Long);

        /** wallet_req auto */
        auto: boolean;
    }

    /** Represents a wallet_req. */
    class wallet_req implements Iwallet_req {

        /**
         * Constructs a new wallet_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: WalletMsg.Iwallet_req);

        /** wallet_req chips. */
        public chips: (number | Long);

        /** wallet_req auto. */
        public auto: boolean;

        /**
         * Creates a new wallet_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wallet_req instance
         */
        public static create(properties?: WalletMsg.Iwallet_req): WalletMsg.wallet_req;

        /**
         * Encodes the specified wallet_req message. Does not implicitly {@link WalletMsg.wallet_req.verify|verify} messages.
         * @param message wallet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WalletMsg.Iwallet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified wallet_req message, length delimited. Does not implicitly {@link WalletMsg.wallet_req.verify|verify} messages.
         * @param message wallet_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WalletMsg.Iwallet_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a wallet_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wallet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WalletMsg.wallet_req;

        /**
         * Decodes a wallet_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wallet_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WalletMsg.wallet_req;

        /**
         * Verifies a wallet_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a wallet_resp. */
    interface Iwallet_resp {

        /** wallet_resp code */
        code: WalletMsg.msg_wallet_code;
    }

    /** Represents a wallet_resp. */
    class wallet_resp implements Iwallet_resp {

        /**
         * Constructs a new wallet_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: WalletMsg.Iwallet_resp);

        /** wallet_resp code. */
        public code: WalletMsg.msg_wallet_code;

        /**
         * Creates a new wallet_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wallet_resp instance
         */
        public static create(properties?: WalletMsg.Iwallet_resp): WalletMsg.wallet_resp;

        /**
         * Encodes the specified wallet_resp message. Does not implicitly {@link WalletMsg.wallet_resp.verify|verify} messages.
         * @param message wallet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WalletMsg.Iwallet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified wallet_resp message, length delimited. Does not implicitly {@link WalletMsg.wallet_resp.verify|verify} messages.
         * @param message wallet_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WalletMsg.Iwallet_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a wallet_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wallet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WalletMsg.wallet_resp;

        /**
         * Decodes a wallet_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wallet_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WalletMsg.wallet_resp;

        /**
         * Verifies a wallet_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}

/** Namespace WinnerMsg. */
declare namespace WinnerMsg {

    /** c_cmd enum. */
    enum c_cmd {
        winners_req = 0,
        winners_resp = 1
    }

    /** Represents a msg_winners_service */
    class msg_winners_service extends protobuf.rpc.Service {

        /**
         * Constructs a new msg_winners_service service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new msg_winners_service service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_winners_service;

        /**
         * Calls winners.
         * @param request winners_req message or plain object
         * @param callback Node-style callback called with the error, if any, and winners_resp
         */
        public winners(request: WinnerMsg.Iwinners_req, callback: WinnerMsg.msg_winners_service.winnersCallback): void;

        /**
         * Calls winners.
         * @param request winners_req message or plain object
         * @returns Promise
         */
        public winners(request: WinnerMsg.Iwinners_req): Promise<WinnerMsg.winners_resp>;
    }

    namespace msg_winners_service {

        /**
         * Callback as used by {@link WinnerMsg.msg_winners_service#winners}.
         * @param error Error, if any
         * @param [response] winners_resp
         */
        type winnersCallback = (error: (Error | null), response?: WinnerMsg.winners_resp) => void;
    }

    /** Properties of a winner_info. */
    interface Iwinner_info {

        /** winner_info nickname */
        nickname: string;

        /** winner_info date */
        date: number;

        /** winner_info awardLevel */
        awardLevel: number;

        /** winner_info award */
        award: (number | Long);
    }

    /** Represents a winner_info. */
    class winner_info implements Iwinner_info {

        /**
         * Constructs a new winner_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: WinnerMsg.Iwinner_info);

        /** winner_info nickname. */
        public nickname: string;

        /** winner_info date. */
        public date: number;

        /** winner_info awardLevel. */
        public awardLevel: number;

        /** winner_info award. */
        public award: (number | Long);

        /**
         * Creates a new winner_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns winner_info instance
         */
        public static create(properties?: WinnerMsg.Iwinner_info): WinnerMsg.winner_info;

        /**
         * Encodes the specified winner_info message. Does not implicitly {@link WinnerMsg.winner_info.verify|verify} messages.
         * @param message winner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WinnerMsg.Iwinner_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified winner_info message, length delimited. Does not implicitly {@link WinnerMsg.winner_info.verify|verify} messages.
         * @param message winner_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WinnerMsg.Iwinner_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a winner_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns winner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WinnerMsg.winner_info;

        /**
         * Decodes a winner_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns winner_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WinnerMsg.winner_info;

        /**
         * Verifies a winner_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a winners_req. */
    interface Iwinners_req {
    }

    /** Represents a winners_req. */
    class winners_req implements Iwinners_req {

        /**
         * Constructs a new winners_req.
         * @param [properties] Properties to set
         */
        constructor(properties?: WinnerMsg.Iwinners_req);

        /**
         * Creates a new winners_req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns winners_req instance
         */
        public static create(properties?: WinnerMsg.Iwinners_req): WinnerMsg.winners_req;

        /**
         * Encodes the specified winners_req message. Does not implicitly {@link WinnerMsg.winners_req.verify|verify} messages.
         * @param message winners_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WinnerMsg.Iwinners_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified winners_req message, length delimited. Does not implicitly {@link WinnerMsg.winners_req.verify|verify} messages.
         * @param message winners_req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WinnerMsg.Iwinners_req, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a winners_req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns winners_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WinnerMsg.winners_req;

        /**
         * Decodes a winners_req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns winners_req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WinnerMsg.winners_req;

        /**
         * Verifies a winners_req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }

    /** Properties of a winners_resp. */
    interface Iwinners_resp {

        /** winners_resp role */
        role?: (WinnerMsg.Iwinner_info[] | null);
    }

    /** Represents a winners_resp. */
    class winners_resp implements Iwinners_resp {

        /**
         * Constructs a new winners_resp.
         * @param [properties] Properties to set
         */
        constructor(properties?: WinnerMsg.Iwinners_resp);

        /** winners_resp role. */
        public role: WinnerMsg.Iwinner_info[];

        /**
         * Creates a new winners_resp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns winners_resp instance
         */
        public static create(properties?: WinnerMsg.Iwinners_resp): WinnerMsg.winners_resp;

        /**
         * Encodes the specified winners_resp message. Does not implicitly {@link WinnerMsg.winners_resp.verify|verify} messages.
         * @param message winners_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: WinnerMsg.Iwinners_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified winners_resp message, length delimited. Does not implicitly {@link WinnerMsg.winners_resp.verify|verify} messages.
         * @param message winners_resp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: WinnerMsg.Iwinners_resp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a winners_resp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns winners_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader | Uint8Array), length?: number): WinnerMsg.winners_resp;

        /**
         * Decodes a winners_resp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns winners_resp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader | Uint8Array)): WinnerMsg.winners_resp;

        /**
         * Verifies a winners_resp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string | null);
    }
}
