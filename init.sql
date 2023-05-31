DROP DATABASE IF EXISTS summerProjectDB;
CREATE DATABASE summerProjectDB;
USE summerProjectDB;


CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230525151630', '2023-05-25 15:16:55', 24),
('DoctrineMigrations\\Version20230526185931', '2023-05-26 18:59:52', 35),
('DoctrineMigrations\\Version20230529164510', '2023-05-29 16:45:25', 35),
('DoctrineMigrations\\Version20230530064259', '2023-05-30 06:43:19', 29),
('DoctrineMigrations\\Version20230531021925', '2023-05-31 02:19:39', 34);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `keywords` json NOT NULL,
  `speakers` json NOT NULL,
  `participents` json NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `place`, `start_date`, `end_date`, `description`, `keywords`, `speakers`, `participents`, `created_at`, `updated_at`) VALUES
(2, 'updated', 'place test updated', '2023-05-26 18:38:18', '2023-05-26 18:38:18', 'description updated', '[]', '[{\"test\": \"test of object updated\"}, \"test2\"]', '[\"parti 1 updated\", \"parti 2\"]', '2023-05-26 15:06:44', '2023-05-26 18:38:18'),
(3, 'updated', 'place test updated', '2023-05-26 18:04:45', '2023-05-26 18:04:45', 'description updated', '[\"2\", \"test updated\"]', '[{\"test\": \"test of object updated\"}, \"test2\"]', '[\"parti 1 updated\", \"parti 2\"]', '2023-05-26 15:07:29', '2023-05-26 18:04:45'),
(4, 'kfdslfjdslkf', 'place test', '2023-05-26 15:09:00', '2023-05-26 15:09:00', 'description', '[\"2\", \"test\"]', '[\"test\", \"test2\"]', '[\"parti 1\", \"parti 2\"]', '2023-05-26 15:09:00', NULL),
(5, 'kfdslfjdslkf', 'place test', '2023-05-26 15:15:33', '2023-05-26 15:15:33', 'description', '[\"2\", \"test\"]', '[\"test\", \"test2\"]', '[\"parti 1\", \"parti 2\"]', '2023-05-26 15:15:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locatiion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `image`, `locatiion`, `description`, `email`, `phone`, `created_at`, `updated_at`, `address`) VALUES
(1, 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', '2023-05-26 01:32:17', '2023-05-29 15:39:11', NULL),
(2, 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', '2023-05-26 20:00:01', '2023-05-29 15:26:37', NULL),
(4, 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', 'test 1', '2023-05-26 20:00:48', NULL, NULL),
(6, 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', 'test 1 update', '2023-05-30 06:52:35', '2023-05-30 06:53:58', 'test 1 update'),
(7, 'Bisso', 'hjljjljlkjl', 'test 1', 'jljlkjlkj', 'lkjljlkjlj@gmail.com', '0451339881', '2023-05-30 15:53:36', NULL, 'Talonpojantie 7 as 101'),
(8, 'bisso test 2', 'bisso test 2', 'test 1', 'bisso test 2', 'bissotest2@gamil.com', '0451339881', '2023-05-30 16:04:37', NULL, 'Talonpojantie 7 as 101');

-- --------------------------------------------------------

--
-- Table structure for table `seminars`
--

CREATE TABLE `seminars` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci,
  `start_datetime` datetime DEFAULT NULL,
  `end_datetime` datetime DEFAULT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `busses` json DEFAULT NULL,
  `trains` json DEFAULT NULL,
  `trams` json DEFAULT NULL,
  `taxis` json DEFAULT NULL,
  `transport_website` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `venue_map` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizations` json DEFAULT NULL,
  `speakers` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seminars`
--

INSERT INTO `seminars` (`id`, `name`, `about`, `start_datetime`, `end_datetime`, `address`, `busses`, `trains`, `trams`, `taxis`, `transport_website`, `venue_map`, `organizations`, `speakers`) VALUES
(1, 'Test update 3', 'test update 3', '2023-05-31 08:02:56', '2023-05-31 08:02:56', 'address test update', '[\"test update 3\", {\"name\": \"test update 4\"}]', '[\"test update 3\", {\"name\": \"test update 4\"}]', '[\"test update 3\", {\"name\": \"test update 4\"}]', '[\"test update 3\", {\"name\": \"test update 4\"}]', 'test update 3', 'test update 3', '[\"test update 3\", {\"name\": \"test update 4\"}]', '[\"test update 3\", {\"name\": \"test update 4\"}]'),
(2, 'Test 1', 'test 1', '2023-05-31 03:16:38', '2023-05-31 03:16:38', 'address test', '[\"test 1\", {\"name\": \"test 2\"}]', '[\"test 1\", {\"name\": \"test 2\"}]', '[\"test 1\", {\"name\": \"test 2\"}]', '[\"test 1\", {\"name\": \"test 2\"}]', 'test 1', 'test 1', '[\"test 1\", {\"name\": \"test 2\"}]', '[\"test 1\", {\"name\": \"test 2\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `speakers`
--

CREATE TABLE `speakers` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `organizations` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `speakers`
--

INSERT INTO `speakers` (`id`, `name`, `image`, `organizations`, `role`, `location`, `description`, `email`, `phone`, `linkedin`, `twitter`, `facebook`, `created_at`, `updated_at`) VALUES
(1, 'Test Speaker 1 update', 'Test Speaker 1 update', 'a:2:{i:0;s:21:\"Test Speaker 1 update\";i:1;O:8:\"stdClass\":1:{s:4:\"name\";s:5:\"hello\";}}', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', 'Test Speaker 1 update', '2023-05-30 03:52:31', '2023-05-30 06:31:09'),
(2, 'Test Speaker 1', 'Test Speaker 1', 'a:1:{i:0;s:14:\"Test Speaker 1\";}', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', '2023-05-30 03:54:56', NULL),
(3, 'Test Speaker 1', 'Test Speaker 1', 'a:1:{i:0;s:14:\"Test Speaker 1\";}', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', '2023-05-30 03:59:43', NULL),
(4, 'Test Speaker 1', 'Test Speaker 1', 'a:2:{i:0;s:14:\"Test Speaker 1\";i:1;O:8:\"stdClass\":1:{s:4:\"name\";s:5:\"hello\";}}', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', '2023-05-30 04:00:34', NULL),
(5, 'Test Speaker 1', 'Test Speaker 1', 'a:2:{i:0;s:14:\"Test Speaker 1\";i:1;O:8:\"stdClass\":1:{s:4:\"name\";s:5:\"hello\";}}', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', 'Test Speaker 1', '2023-05-30 04:03:45', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seminars`
--
ALTER TABLE `seminars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `speakers`
--
ALTER TABLE `speakers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `seminars`
--
ALTER TABLE `seminars`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `speakers`
--
ALTER TABLE `speakers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
