-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: summerProjectDB:3306
-- Generation Time: Jun 06, 2023 at 11:08 AM
-- Server version: 8.0.33
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `summerProjectDB`
--

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
  `address` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `image`, `locatiion`, `description`, `email`, `phone`, `created_at`, `updated_at`, `address`) VALUES
(9, 'ABC Corporation', 'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'test 1', 'ABC Corporation is a leading global company specializing in technology solutions. We provide innovative software and hardware products to businesses across various industries. With a focus on quality and customer satisfaction, we strive to deliver cutting-edge solutions that drive growth and success.', 'info@abccorp.com', '+1 555-123-4567', '2023-06-06 09:54:04', NULL, '123 Main Street, City, Country'),
(10, 'XYZ Enterprises', 'https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'test 1', 'XYZ Enterprises is a trusted provider of consulting services, helping businesses optimize their operations and achieve strategic goals. Our team of experts offers tailored solutions in areas such as finance, marketing, and human resources. We are committed to delivering value and driving sustainable growth for our clients.', 'contact@xyzenterprises.com', '+1 555-987-6543', '2023-06-06 09:56:22', NULL, ' 456 Elm Avenue, City, Country'),
(11, 'QRS Industries', 'https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg', 'test 1', 'QRS Industries is a renowned manufacturing company specializing in high-quality products for the automotive industry. With a focus on innovation and precision engineering, we consistently deliver superior performance and reliability. Our commitment to excellence has earned us a reputation as a trusted partner in the industry.', 'sales@qrsindustries.com', '+1 555-789-0123', '2023-06-06 09:58:15', NULL, '789 Oak Street, City, Country'),
(12, 'PQR Solutions', 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'test 1', ' PQR Solutions is a leading provider of comprehensive IT solutions for businesses. We offer a wide range of services including software development, cloud computing, cybersecurity, and IT consulting. With a focus on delivering innovative and reliable solutions, we help our clients leverage technology to drive their digital transformation and achieve their business objectives.', 'info@pqrsolutions.com', '+1 555-246-1357', '2023-06-06 10:02:00', NULL, '987 Maple Lane, City, Country');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
